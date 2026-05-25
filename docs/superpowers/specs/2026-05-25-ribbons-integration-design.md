# Ribbons Component Integration Design

## Overview
Integrate the existing Ribbons WebGL component as an interactive overlay across the entire portfolio website while preserving the current animated background orbs in the Hero section.

## Requirements
- Ribbons component displays as overlay on top of all content
- Works across all pages of the website
- Maintains existing Hero section animated orbs
- Uses full viewport sizing
- Preserves all ribbon interactivity (mouse/follow, shader effects, fade)
- Does not interfere with content interactions

## Architecture
### Component Structure
- New component: `src/components/overlay/RibbonsOverlay.tsx`
- Integrated via: `src/app/layout.tsx` (site-wide)
- Source component: `src/Component.tsx` (existing Ribbons)

### Implementation Details

#### RibbonsOverlay.tsx
```typescript
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
        baseThickness={3}
        colors={[ribbonColor]}
        speedMultiplier={0.7}
        maxAge={1000}
        enableFade={true}
        enableShaderEffect={true}
        effectAmplitude={1.5}
        backgroundColor={[0, 0, 0, 0]}
      />
    </div>
  );
}
```

#### Layout Integration (src/app/layout.tsx)
Add `<RibbonsOverlay />` as the first child within the `<ThemeProvider>` element, before `{children}`.

### Styling & Positioning
- `fixed inset-0`: Covers entire viewport
- `z-[9999]`: Ensures appearance above content but below potential modals
- `pointer-events-none`: Allows interactions to pass through to underlying content
- `aria-hidden="true"`: Prevents screen reader interference

### Design Consistency
- Preserves existing Hero animated orbs unchanged
- Uses theme‑dependent ribbon colour (purple in dark mode, blue in light mode)
- Maintains all ribbon configuration from showcase example
- Responsive behavior inherited from existing component

## Data Flow
1. RibbonsOverlay renders fixed‑position div
2. Existing Ribbons component manages WebGL canvas internally
3. Canvas receives mouse/touch events through pointer‑events‑none parent
4. Updates ribbon points based on cursor position
5. Render loop continues independently of React lifecycle

## Performance Considerations
- Leverages existing Ribbons optimizations (resize handling, cleanup)
- Minimal DOM overhead (single wrapper div)
- Automatic cleanup on navigation/route changes
- Graceful degradation if WebGL unsupported

## Error Handling
- Inherits error boundaries from existing Ribbons component
- No impact on core functionality if ribbon fails to load
- Canvas properly removed on component unmount

## Testing Approach
- Visual verification: Ribbons appear overlay across all pages
- Interaction verification: Ribbons respond to mouse/touch
- Regression verification: Existing content/interactions unaffected
- Performance verification: No significant FPS impact

## Files to Create/Modify
1. Create: `src/components/overlay/RibbonsOverlay.tsx`
2. Modify: `src/app/layout.tsx` (add RibbonsOverlay import and usage)
