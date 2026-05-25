"use client";

import { Ribbons } from "@/Component";
import { useTheme } from "next-themes";

export default function RibbonsOverlay() {
  const { theme } = useTheme();
  const ribbonColor = theme === "dark" ? "#8b5cf6" : "#3b82f6";
  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    >
      <Ribbons
        baseThickness={5}
        colors={[ribbonColor]}
        speedMultiplier={0.7}
        maxAge={900}
        enableFade={true}
        enableShaderEffect={true}
        effectAmplitude={0.2}
        backgroundColor={[0, 0, 0, 0]}
      />
    </div>
  );
}