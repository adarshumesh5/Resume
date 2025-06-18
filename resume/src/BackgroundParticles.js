import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from "@mui/material/styles";

const BackgroundParticles = () => {
  const theme = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const shapeOptions = ["circle", "triangle", "square", "polygon", "star"];
  const randomShape = shapeOptions[Math.floor(Math.random() * shapeOptions.length)];
  const isDark = theme.palette.mode === "dark";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: isDark ? "#121212" : "#ffffff" }
        },
        particles: {
          number: {
            value: 65,
            density: { enable: true, area: 800 }
          },
          color: { value: isDark ? "#00e5ff" : "#555555" },
          shape: { type: randomShape },
          links: {
            enable: true,
            distance: 150,
            color: isDark ? "#00e5ff" : "#aaaaaa",
            opacity: 0.5,
            width: 2
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: { default: "bounce" }
          },
          size: {
            value: { min: 1.5, max: 4 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 1,
              sync: false
            }
          },
          opacity: {
            value: 0.7,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
              sync: false
            }
          },
          collisions: { enable: true }, // particles bounce off each other
          shadow: {
            enable: true,
            color: isDark ? "#00e5ff" : "#666666",
            blur: 5
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push" // or "bubble", "repulse", "remove"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              quantity: 2
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default BackgroundParticles;
