"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface VantaEffect {
  destroy: () => void;
}

interface VantaFogOptions {
  el: HTMLElement;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  highlightColor?: number;
  midtoneColor?: number;
  lowlightColor?: number;
  baseColor?: number;
  blurFactor?: number;
  speed?: number;
  zoom?: number;
}

interface WindowWithVanta extends Window {
  THREE?: unknown;
  VANTA?: {
    FOG: (options: VantaFogOptions) => VantaEffect;
    // Vanta attaches its own rAF wrapper here at runtime; we will wrap it
    _requestAnimationFrame?: (cb: FrameRequestCallback) => number;
  };
}

// Simple rAF throttle: only allow callbacks at most `fps` times per second
function createRafLimiter(fps: number) {
  const frameInterval = 1000 / fps;
  let lastTime = 0;

  return (cb: FrameRequestCallback): number => {
    return window.requestAnimationFrame((time) => {
      if (time - lastTime >= frameInterval) {
        lastTime = time;
        cb(time);
      } else {
        // Skip this frame and schedule the next one
        window.requestAnimationFrame((nextTime) => {
          if (nextTime - lastTime >= frameInterval) {
            lastTime = nextTime;
            cb(nextTime);
          }
        });
      }
    });
  };
}

export function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);

  useEffect(() => {
    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  const initVanta = () => {
    const win = window as WindowWithVanta;
    if (!win.VANTA || !win.VANTA.FOG || !vantaRef.current) {
      return;
    }

    // Clean up existing effect if any
    if (effectRef.current) {
      effectRef.current.destroy();
    }

    try {
      // Limit Vanta's internal animation loop to a target FPS
      // Change `targetFps` to 30 if you want an even lower cap.
      const targetFps = 1; // or 30
      if (typeof win.VANTA._requestAnimationFrame === "function") {
        const originalRaf = win.VANTA._requestAnimationFrame;
        const limitedRaf = createRafLimiter(targetFps);

        // Wrap Vanta's rAF only once
        win.VANTA._requestAnimationFrame = ((cb: FrameRequestCallback) =>
          limitedRaf((t) =>
            originalRaf(cb.bind(null, t))
          )) as typeof originalRaf;
      }

      effectRef.current = win.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 20,
        scaleMobile: 50,
        highlightColor: 0x484930,
        midtoneColor: 0x350f06,
        lowlightColor: 0x350f06,
        baseColor: 0x190702,
        blurFactor: 0.6,
        speed: 0.5,
        zoom: 0.3,
      });
    } catch (error) {
      console.error("[VANTA] Failed to initialize fog effect", error);
    }
  };

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onReady={() => setThreeLoaded(true)}
      />

      {threeLoaded && (
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"
          strategy="afterInteractive"
          onReady={initVanta}
        />
      )}

      <div
        ref={vantaRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundColor: "var(--background)",
        }}
      />
    </>
  );
}
