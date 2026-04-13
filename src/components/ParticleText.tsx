import { useEffect, useRef } from 'react';

export default function ParticleText({ text = 'Jacob Maynard' }: { text?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const textEl = textRef.current;
    if (!container || !canvas || !textEl) return;

    // Measure the actual rendered DOM text to drive canvas sizing
    const computedStyle = window.getComputedStyle(textEl);
    const fontSize = parseFloat(computedStyle.fontSize);
    const fontWeight = computedStyle.fontWeight;
    const fontFamily = computedStyle.fontFamily;
    const font = `${fontWeight} ${fontSize}px ${fontFamily}`;

    const containerRect = container.getBoundingClientRect();
    const layoutWidth = Math.floor(containerRect.width);
    const layoutHeight = Math.floor(containerRect.height);
    if (layoutWidth === 0 || layoutHeight === 0) return;

    // Canvas is larger than the layout slot to give particles room to scatter.
    const padding = 400;
    const width = layoutWidth + padding * 2;
    const height = layoutHeight + padding * 2;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.style.left = `${-padding}px`;
    canvas.style.top = `${-padding}px`;

    // Sample text using offscreen 2D canvas (just for shape/alpha, not color)
    const offscreen = document.createElement('canvas');
    const supersample = 2;
    offscreen.width = width * supersample;
    offscreen.height = height * supersample;
    const ctx2d = offscreen.getContext('2d')!;
    ctx2d.scale(supersample, supersample);

    const textX = width / 2;
    const textY = height / 2;

    ctx2d.font = font;
    ctx2d.textAlign = 'center';
    ctx2d.textBaseline = 'middle';
    const metrics = ctx2d.measureText(text);
    const textWidth = metrics.width;
    const textLeft = textX - textWidth / 2;

    // Render white text — we only need the alpha channel for shape
    ctx2d.fillStyle = '#ffffff';
    ctx2d.fillText(text, textX, textY);

    const imageData = ctx2d.getImageData(0, 0, offscreen.width, offscreen.height);

    // Collect particle data
    const positions: number[] = [];
    const targets: number[] = [];
    const textUs: number[] = []; // normalized x-position across text (0-1) for gradient
    const alphas: number[] = [];
    const speeds: number[] = [];

    for (let y = 0; y < offscreen.height; y++) {
      for (let x = 0; x < offscreen.width; x++) {
        const i = (y * offscreen.width + x) * 4;
        const alpha = imageData.data[i + 3];
        if (alpha > 5) {
          const px = x / supersample;
          const py = y / supersample;

          // Target position (normalized to clip space)
          const tx = (px / width) * 2 - 1;
          const ty = -((py / height) * 2 - 1);
          targets.push(tx, ty);

          // Start position (scattered outward)
          const dx = px - textX;
          const dy = py - textY;
          const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.5;
          const dist = 150 + Math.random() * 250;
          const sx = ((px + Math.cos(angle) * dist) / width) * 2 - 1;
          const sy = -(((py + Math.sin(angle) * dist) / height) * 2 - 1);
          positions.push(sx, sy);

          // Normalized x-position within text bounds (0-1)
          textUs.push(Math.max(0, Math.min(1, (px - textLeft) / textWidth)));

          alphas.push(alpha / 255);

          // Speed variation
          speeds.push(0.3 + Math.random() * 0.4);
        }
      }
    }

    const particleCount = positions.length / 2;

    // WebGL2 setup - transparent background
    const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    // Shaders — gradient is computed dynamically in the vertex shader
    const vsSource = `#version 300 es
      in vec2 aStartPos;
      in vec2 aTargetPos;
      in float aTextU;
      in float aAlpha;
      in float aSpeed;

      uniform float uTime;
      uniform float uPointSize;

      out vec4 vColor;

      // Gradient colors: #f8923e and #f367af
      const vec3 COLOR_A = vec3(0.973, 0.573, 0.243);
      const vec3 COLOR_B = vec3(0.953, 0.404, 0.686);

      float easeOutQuart(float t) {
        return 1.0 - pow(1.0 - t, 4.0);
      }

      void main() {
        float progress = clamp(uTime * aSpeed, 0.0, 1.0);
        float easedProgress = easeOutQuart(progress);
        vec2 pos = mix(aStartPos, aTargetPos, easedProgress);
        gl_Position = vec4(pos, 0.0, 1.0);
        gl_PointSize = uPointSize;

        // Animated gradient: matches CSS background-size:400% with 12s ease cycle
        // Cosine wave: smooth easing, starts at orange end (offset=0), like CSS
        float offset = 0.5 - 0.5 * cos(uTime * 6.28318 / 12.0);
        // Map particle's text position through the 400% gradient window
        float gradientU = clamp((aTextU + offset * 3.0) / 4.0, 0.0, 1.0);
        vec3 color = mix(COLOR_A, COLOR_B, gradientU);

        vColor = vec4(color, aAlpha);
      }
    `;

    const fsSource = `#version 300 es
      precision highp float;
      in vec4 vColor;
      out vec4 fragColor;

      void main() {
        fragColor = vColor;
      }
    `;

    function compileShader(source: string, type: number): WebGLShader {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      return shader;
    }

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Buffers
    const startPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, startPosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    const aStartPos = gl.getAttribLocation(program, 'aStartPos');
    gl.enableVertexAttribArray(aStartPos);
    gl.vertexAttribPointer(aStartPos, 2, gl.FLOAT, false, 0, 0);

    const targetPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, targetPosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(targets), gl.STATIC_DRAW);
    const aTargetPos = gl.getAttribLocation(program, 'aTargetPos');
    gl.enableVertexAttribArray(aTargetPos);
    gl.vertexAttribPointer(aTargetPos, 2, gl.FLOAT, false, 0, 0);

    const textUBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textUBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textUs), gl.STATIC_DRAW);
    const aTextU = gl.getAttribLocation(program, 'aTextU');
    gl.enableVertexAttribArray(aTextU);
    gl.vertexAttribPointer(aTextU, 1, gl.FLOAT, false, 0, 0);

    const alphaBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(alphas), gl.STATIC_DRAW);
    const aAlpha = gl.getAttribLocation(program, 'aAlpha');
    gl.enableVertexAttribArray(aAlpha);
    gl.vertexAttribPointer(aAlpha, 1, gl.FLOAT, false, 0, 0);

    const speedBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, speedBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(speeds), gl.STATIC_DRAW);
    const aSpeed = gl.getAttribLocation(program, 'aSpeed');
    gl.enableVertexAttribArray(aSpeed);
    gl.vertexAttribPointer(aSpeed, 1, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uTime = gl.getUniformLocation(program, 'uTime');
    const uPointSize = gl.getUniformLocation(program, 'uPointSize');

    gl.uniform1f(uPointSize, dpr / supersample);

    // Blending for alpha
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Transparent background
    gl.clearColor(0, 0, 0, 0);

    let startTime = 0;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, elapsed);
      gl.drawArrays(gl.POINTS, 0, particleCount);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(startPosBuffer);
      gl.deleteBuffer(targetPosBuffer);
      gl.deleteBuffer(textUBuffer);
      gl.deleteBuffer(alphaBuffer);
      gl.deleteBuffer(speedBuffer);
    };
  }, [text]);

  return (
    <div ref={containerRef} className="relative w-full overflow-visible">
      <canvas
        ref={canvasRef}
        className="absolute pointer-events-none"
      />
      <h1
        ref={textRef}
        className="text-5xl lg:text-6xl font-bold p-1 text-center text-transparent select-text"
        style={{ fontFamily: 'system-ui, sans-serif' }}
      >
        {text}
      </h1>
    </div>
  );
}
