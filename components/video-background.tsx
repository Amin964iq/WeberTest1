"use client";

export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        objectPosition: "center",
        zIndex: 0,
        opacity: 1,
        margin: 0,
        padding: 0,
        border: "none",
      }}
    >
      <source src="/back.mov" type="video/quicktime" />
      <source src="/back.mp4" type="video/mp4" />
    </video>
  );
}
