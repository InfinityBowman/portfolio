'use client';
import { useEffect, useRef } from 'react';

interface BackgroundCanvasProps {
  opacity?: number;
}

export default function BackgroundCanvas({ opacity = 0.2 }: BackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resizeCanvas() {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid configuration
    const gridSpacing = 30;
    const waveAmplitude = 15;
    const waveSpeed = 0.01;
    let time = 0;

    function drawGrid() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;

      // Calculate grid dimensions with extra padding to ensure no visible edges
      // Add extra columns and rows on each side to make it appear endless
      const padding = Math.ceil(waveAmplitude / gridSpacing) + 2; // Extra cells for wave movement
      const cols = Math.ceil(canvas.width / gridSpacing) + padding * 2;
      const rows = Math.ceil(canvas.height / gridSpacing) + padding * 2;

      // Offset to start the grid before the visible area
      const startX = -padding * gridSpacing;
      const startY = -padding * gridSpacing;

      // Draw horizontal lines with wave effect
      for (let y = 0; y < rows; y++) {
        ctx.beginPath();
        for (let x = 0; x < cols; x++) {
          const xPos = startX + x * gridSpacing;
          // Wave effect propagates from left to right
          const distanceFromLeft = (xPos - startX) / (cols * gridSpacing);
          const offset = Math.sin(time - distanceFromLeft * 4) * waveAmplitude;
          const yPos = startY + y * gridSpacing + offset;

          if (x === 0) {
            ctx.moveTo(xPos, yPos);
          } else {
            ctx.lineTo(xPos, yPos);
          }
        }
        ctx.stroke();
      }

      // Draw vertical lines with wave effect
      for (let x = 0; x < cols; x++) {
        ctx.beginPath();
        for (let y = 0; y < rows; y++) {
          const yPos = startY + y * gridSpacing;
          // Wave effect follows horizontal lines
          const distanceFromLeft = (startX + x * gridSpacing) / (cols * gridSpacing);
          const offset = Math.sin(time - distanceFromLeft * 4) * waveAmplitude;
          const xPos = startX + x * gridSpacing + Math.sin(time - (yPos / canvas.height) * 2) * (waveAmplitude / 2);

          if (y === 0) {
            ctx.moveTo(xPos, yPos + offset);
          } else {
            ctx.lineTo(xPos, yPos + offset);
          }
        }
        ctx.stroke();
      }

      // Update time for animation
      time += waveSpeed;

      // Continue animation
      requestAnimationFrame(drawGrid);
    }

    // Start the animation
    const animationId = requestAnimationFrame(drawGrid);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: opacity,
        pointerEvents: 'none',
      }}
    />
  );
}
