import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from "@mui/material/styles";

const BackgroundParticles = () => {
  const theme = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: theme.palette.mode === "dark" ? "#121212" : "#ffffff"
          }
        },
        particles: {
          number: { value: 60 },
          color: { value: theme.palette.mode === "dark" ? "#aaaaaa" : "#888888" },
          links: {
            enable: true,
            color: theme.palette.mode === "dark" ? "#888888" : "#cccccc"
          },
          move: { enable: true, speed: 1 },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 }
        },
        detectRetina: true
      }}
    />
  );
};

export default BackgroundParticles;
