# Ribbons Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the Ribbons WebGL component as a fixed overlay across the entire portfolio website.

**Architecture:** Create the source `Ribbons` component in `src/Component.tsx`, wrap it in a `RibbonsOverlay` component with fixed positioning and `pointer-events-none`, and mount it once in the root layout so it appears on every page.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS 4, OGL (WebGL), React 19

---

### Task 1: Create Source Component

**Files:**
- Create: `src/Component.tsx`

- [ ] **Step 1: Write the Ribbons component**

```typescript
"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Transform, Vec3, Color, Polyline } from "ogl";

interface RibbonsProps {
  colors?: string[];
  baseSpring?: number;
  baseFriction?: number;
  baseThickness?: number;
  offsetFactor?: number;
  maxAge?: number;
  pointCount?: number;
  speedMultiplier?: number;
  enableFade?: boolean;
  enableShaderEffect?: boolean;
  effectAmplitude?: number;
  backgroundColor?: number[];
  className?: string;
}

export const Ribbons: React.FC<RibbonsProps> = ({
  colors = ["#ff9346", "#7cff67", "#ffee51", "#5227FF"],
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.6,
  enableFade = false,
  enableShaderEffect = false,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0],
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ dpr: window.devicePixelRatio || 2, alpha: true });
    const gl = renderer.gl;

    if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
      gl.clearColor(backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);
    } else {
      gl.clearColor(0, 0, 0, 0);
    }

    gl.canvas.style.position = "absolute";
    gl.canvas.style.top = "0";
    gl.canvas.style.left = "0";
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    container.appendChild(gl.canvas);

    const scene = new Transform();
    const lines: { spring: number; friction: number; mouseVelocity: Vec3; mouseOffset: Vec3; points: Vec3[]; polyline: Polyline }[] = [];

    const vertex = `
      precision highp float;
      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;
      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      uniform float uEnableShaderEffect;
      uniform float uEffectAmplitude;
      varying vec2 vUV;
      vec4 getPosition() {
          vec4 current = vec4(position, 1.0);
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
          vec2 nextScreen = next.xy * aspect;
          vec2 prevScreen = prev.xy * aspect;
          vec2 tangent = normalize(nextScreen - prevScreen);
          vec2 normal = vec2(-tangent.y, tangent.x);
          normal /= aspect;
          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
          float dist = length(nextScreen - prevScreen);
          normal *= smoothstep(0.0, 0.02, dist);
          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
          float pixelWidth = current.w * pixelWidthRatio;
          normal *= pixelWidth * uThickness;
          current.xy -= normal * side;
          if(uEnableShaderEffect > 0.5) {
            current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
          }
          return current;
      }
      void main() { vUV = uv; gl_Position = getPosition(); }
    `;

    const fragment = `
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uEnableFade;
      varying vec2 vUV;
      void main() {
          float fadeFactor = 1.0;
          if(uEnableFade > 0.5) { fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y); }
          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
      }
    `;

    function resize() {
      if (!container) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
      lines.forEach((line) => line.polyline.resize());
    }
    window.addEventListener("resize", resize);

    const center = (colors.length - 1) / 2;
    colors.forEach((color, index) => {
      const spring = baseSpring + (Math.random() - 0.5) * 0.05;
      const friction = baseFriction + (Math.random() - 0.5) * 0.05;
      const thickness = baseThickness + (Math.random() - 0.5) * 3;
      const mouseOffset = new Vec3((index - center) * offsetFactor + (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.1, 0);

      const line = { spring, friction, mouseVelocity: new Vec3(), mouseOffset, points: [] as Vec3[], polyline: {} as Polyline };
      const points: Vec3[] = [];
      for (let i = 0; i < pointCount; i++) points.push(new Vec3());
      line.points = points;
      line.polyline = new Polyline(gl, {
        points,
        vertex,
        fragment,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: thickness },
          uOpacity: { value: 1.0 },
          uTime: { value: 0.0 },
          uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
          uEffectAmplitude: { value: effectAmplitude },
          uEnableFade: { value: enableFade ? 1.0 : 0.0 },
        },
      });
      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    resize();

    const mouse = new Vec3();
    function updateMouse(e: MouseEvent | TouchEvent) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      let x: number, y: number;
      if ("changedTouches" in e && e.changedTouches.length) {
        x = e.changedTouches[0].clientX - rect.left;
        y = e.changedTouches[0].clientY - rect.top;
      } else if (e instanceof MouseEvent) {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      } else { x = 0; y = 0; }
      mouse.set((x / container.clientWidth) * 2 - 1, (y / container.clientHeight) * -2 + 1, 0);
    }

    container.addEventListener("mousemove", updateMouse);
    container.addEventListener("touchstart", updateMouse, { passive: false });
    container.addEventListener("touchmove", updateMouse, { passive: false });

    let frameId: number;
    let lastTime = performance.now();
    function update() {
      frameId = requestAnimationFrame(update);
      const dt = performance.now() - lastTime;
      lastTime = performance.now();

      lines.forEach((line) => {
        const tmp = new Vec3();
        tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
        line.mouseVelocity.add(tmp).multiply(line.friction);
        line.points[0].add(line.mouseVelocity);
        for (let i = 1; i < line.points.length; i++) {
          const alpha = isFinite(maxAge) && maxAge > 0 ? Math.min(1, (dt * speedMultiplier) / (maxAge / (line.points.length - 1))) : 0.9;
          line.points[i].lerp(line.points[i - 1], alpha);
        }
        line.polyline.mesh.program.uniforms.uTime.value = performance.now() * 0.001;
        line.polyline.updateGeometry();
      });
      renderer.render({ scene });
    }
    update();

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", updateMouse);
      container.removeEventListener("touchstart", updateMouse);
      container.removeEventListener("touchmove", updateMouse);
      cancelAnimationFrame(frameId);
      if (gl.canvas?.parentNode === container) container.removeChild(gl.canvas);
    };
  }, [colors, baseSpring, baseFriction, baseThickness, offsetFactor, maxAge, pointCount, speedMultiplier, enableFade, enableShaderEffect, effectAmplitude, backgroundColor]);

  return <div ref={containerRef} className={`relative w-full h-full ${className || ""}`} />;
};

export default Ribbons;
```

- [ ] **Step 2: Verify file exists**

Check: `src/Component.tsx` exists with the Ribbons component.

- [ ] **Step 3: Install dependency**

Run: `npm install ogl@^0.0.117`
Expected: Package added to node_modules and package.json.

---

### Task 2: Create Overlay Component

**Files:**
- Create: `src/components/overlay/RibbonsOverlay.tsx`

- [ ] **Step 1: Write the overlay component**

```typescript
"use client";

import { Ribbons } from "@/Component";

export default function RibbonsOverlay() {
  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    >
      <Ribbons
        baseThickness={40}
        colors={["#1A1A1B"]}
        speedMultiplier={0.5}
        maxAge={600}
        enableFade={true}
        enableShaderEffect={true}
        effectAmplitude={1.5}
        backgroundColor={[0, 0, 0, 0]}
      />
    </div>
  );
}
```

---

### Task 3: Integrate into Root Layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add import**

```typescript
import RibbonsOverlay from "@/components/overlay/RibbonsOverlay";
```

Add after line 4 (`import { ThemeProvider } from "@/components/theme-provider";`).

- [ ] **Step 2: Add overlay component**

Inside `<ThemeProvider>` before `{children}`:

```tsx
<RibbonsOverlay />
{children}
```

- [ ] **Step 3: Verify layout**

Expected content of `src/app/layout.tsx` after changes:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import RibbonsOverlay from "@/components/overlay/RibbonsOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyesh Nandanwar | Full Stack Developer",
  description: "Portfolio of Divyesh Nandanwar, a Full Stack Developer with 2+ years of experience building scalable, user-focused web applications.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <RibbonsOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

### Task 4: Build Verification

- [ ] **Step 1: Install ogl if not already installed**

Run: `npm install ogl@^0.0.117`
Expected: Success, ogl added to dependencies.

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Dev server check**

Run: `npm run dev`
Expected: Server starts, navigate to home page and verify ribbons appear as overlay.