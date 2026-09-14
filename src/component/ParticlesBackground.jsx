import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      background: {
        color: {
          value: "transparent",
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ["grab", "repulse"],
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.6,
            },
          },
          repulse: {
            distance: 140,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        number: {
          value: 190,
          density: {
            enable: true,
            area: 900,
          },
        },
        color: {
          value: ["#22d3ee", "#10b981", "#ec4899"],
        },
        links: {
          color: "#22d3ee",
          distance: 260,
          enable: true,
          opacity: 0.35,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1.2,
          straight: false,
        },
        opacity: {
          value: { min: 0.4, max: 0.9 },
          animation: {
            enable: true,
            speed: 0.6,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 0.5,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      className="absolute inset-0"
      options={options}
      style={{ position: "absolute", inset: 0 }}
    />
  );
};

export default ParticlesBackground;