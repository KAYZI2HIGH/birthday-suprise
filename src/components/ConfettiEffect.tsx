'use client'
import { useEffect } from "react";

declare global {
  interface Window {
    confetti: (options: any) => void;
  }
}

export function ConfettiEffect() {
  useEffect(() => {
    // Skip during SSR
    if (typeof window === "undefined") return;

    // Load confetti script only once
    if (typeof window.confetti === "function") {
      triggerConfetti();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    script.async = true;
    script.onload = triggerConfetti;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };

    function triggerConfetti() {
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
      };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }

        const particleCount = 50 * (timeLeft / duration);

        // Left-side confetti
        window.confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#FFD1DC", "#E6E6FA", "#F9D784", "#ffc0cb"],
        });

        // Right-side confetti
        window.confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#FFD1DC", "#E6E6FA", "#F9D784", "#ffc0cb"],
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, []);

  return null;
}
