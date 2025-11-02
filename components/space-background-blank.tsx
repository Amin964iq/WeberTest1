"use client";

/**
 * Blank Black Background Component
 * Simple, clean black background with no animations or elements
 */

export default function SpaceBackgroundBlank() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    />
  );
}
