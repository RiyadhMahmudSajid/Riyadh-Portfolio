import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const AnimatedBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
       <Particles
  id="tsparticles"
  className="fixed inset-0 -z-10 pointer-events-none"
  options={{
    fpsLimit: 60,
    background: {
      color: "transparent",
    },

    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          area: 900,
        },
      },

      color: {
        value: ["#ffffff", "#10b981", "#06b6d4"],
      },

      shape: {
        type: ["circle", "triangle"],
      },

      opacity: {
        value: { min: 0.2, max: 0.6 },
        animation: {
          enable: true,
          speed: 0.9,
          minimumValue: 0.8,
          sync: false,
        },
      },

      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 1,
          sync: false,
        },
      },

      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },

      links: {
        enable: false,
      },

      stroke: {
        width: 1,
        color: "#10b981",
        opacity: 0.15,
      },

      shadow: {
        enable: true,
        color: "#10b981",
        blur: 10,
      },
    },

    interactivity: {
      events: {
        resize: true,
      },
    },

    detectRetina: true,
  }}
/>

    );
};

export default AnimatedBackground;