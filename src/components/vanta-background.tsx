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
      effectRef.current = win.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 75,
        scaleMobile: 50,
        highlightColor: 0x484930,
        midtoneColor: 0x350f06,
        lowlightColor: 0x350f06,
        baseColor: 0x190702,
        blurFactor: 0.8,
        speed: 0.5,
        zoom: 0.35,
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
