"use client";

/**
 * Video Background Component
 * Displays a full-screen video background with pure quality and full opacity
 */

export default function VideoBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        backgroundColor: '#000000',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: 1,
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      >
        <source src="/backkk.mov" type="video/quicktime" />
        <source src="/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
