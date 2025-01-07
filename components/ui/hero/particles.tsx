"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [pColor, setPColor] = useState("#000000");

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const updateColors = () => {
    console.log("updating colors");
    console.log(typeof window !== "undefined");
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const bg = getComputedStyle(document.documentElement).getPropertyValue("--bgColor").trim();
        const fg = getComputedStyle(document.documentElement).getPropertyValue("--fgColor").trim();
        console.log(bg, fg);
        setBgColor(bg);
        setPColor(fg);
      }, 50);
    }
  };

  useEffect(() => {
    updateColors();
    window.addEventListener("themechange", updateColors);
    return () => {
      window.removeEventListener("themechange", updateColors);
    };
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: bgColor,
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 10,
            factor: 10,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
          },
        },
      },
      particles: {
        color: {
          value: pColor,
        },
        links: {
          color: pColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [bgColor, pColor]
  );

  if (init) {
    return (
      <div className="particles-wrapper -z-50" style={{ position: "relative", width: "100%", height: "100%" }}>
        <Particles
          id="tsparticles"
          options={options}
          style={{ position: "relative", width: "100%", height: "100%" }}
          className="particles-canvas"
        />
      </div>
    );
  }

  return <></>;
};
