"use client";

import React, { useEffect, useRef } from "react";
import { portfolioProjects } from "@/lib/portfolio-data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { mat4 } from "gl-matrix";
import "./infinite-menu.css";

interface InfiniteMenuProps {
  locale: string;
}

class InfiniteGridMenu {
  canvas: HTMLCanvasElement;
  gl: WebGL2RenderingContext;
  program: WebGLProgram;
  VAO: WebGLVertexArrayObject;
  vertexCount: number;
  rotationAngle: number = 0;
  targetRotationAngle: number = 0;
  isAnimating: boolean = false;
  animationProgress: number = 0;
  itemCount: number;
  radius: number = 8;
  height: number = 0;
  centerX: number = 0;
  centerY: number = 0;

  constructor(canvas: HTMLCanvasElement, itemCount: number) {
    this.canvas = canvas;
    this.itemCount = itemCount;

    const gl = canvas.getContext("webgl2");
    if (!gl) {
      throw new Error("WebGL2 not supported");
    }
    this.gl = gl;

    // Set canvas size
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());

    // Create shaders and program
    const vertexShaderSource = `#version 300 es
      uniform mat4 projection;
      uniform mat4 view;
      uniform mat4 model;

      in vec4 position;

      void main(void) {
        gl_Position = projection * view * model * position;
        gl_PointSize = 8.0;
      }
    `;

    const fragmentShaderSource = `#version 300 es
      precision highp float;

      out vec4 outColor;

      void main(void) {
        float dist = distance(gl_PointCoord, vec2(0.5, 0.5));
        if (dist > 0.5) discard;

        outColor = vec4(1.0, 1.0, 1.0, 0.8);
      }
    `;

    const vertexShader = this.compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = this.compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    this.program = this.createProgram(vertexShader, fragmentShader);

    // Create mesh for circle with many points
    const vertices = this.createCircleVertices(this.itemCount);
    this.vertexCount = vertices.length / 3;

    const VBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, VBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    this.VAO = gl.createVertexArray() as WebGLVertexArrayObject;
    gl.bindVertexArray(this.VAO);

    const positionAttributeLocation = gl.getAttribLocation(this.program, "position");
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

    gl.useProgram(this.program);
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  }

  resizeCanvas() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.height = this.canvas.height;
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  compileShader(source: string, type: number): WebGLShader {
    const shader = this.gl.createShader(type);
    if (!shader) throw new Error("Failed to create shader");
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      const error = this.gl.getShaderInfoLog(shader);
      throw new Error(`Shader compilation error: ${error}`);
    }
    return shader;
  }

  createProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
    const program = this.gl.createProgram();
    if (!program) throw new Error("Failed to create program");
    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);

    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      const error = this.gl.getProgramInfoLog(program);
      throw new Error(`Program linking error: ${error}`);
    }
    return program;
  }

  createCircleVertices(count: number): number[] {
    const vertices: number[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * this.radius;
      const y = Math.sin(angle) * this.radius;
      vertices.push(x, y, 0);
    }
    return vertices;
  }

  rotateToItem(index: number) {
    this.targetRotationAngle = (index / this.itemCount) * Math.PI * 2;
    this.isAnimating = true;
    this.animationProgress = 0;
  }

  update() {
    if (this.isAnimating) {
      this.animationProgress += 0.05;
      if (this.animationProgress >= 1) {
        this.animationProgress = 1;
        this.isAnimating = false;
      }

      // Smooth easing
      const easeProgress = this.easeInOutCubic(this.animationProgress);
      this.rotationAngle += (this.targetRotationAngle - this.rotationAngle) * easeProgress;
    }
  }

  easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  render() {
    const gl = this.gl;
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const projection = mat4.create();
    mat4.perspective(projection, (Math.PI / 180) * 45, this.canvas.width / this.canvas.height, 0.1, 100);

    const view = mat4.create();
    mat4.lookAt(view, [0, 0, 15], [0, 0, 0], [0, 1, 0]);

    const model = mat4.create();
    mat4.rotateY(model, model, this.rotationAngle);

    gl.useProgram(this.program);
    gl.bindVertexArray(this.VAO);

    const projectionLoc = gl.getUniformLocation(this.program, "projection");
    const viewLoc = gl.getUniformLocation(this.program, "view");
    const modelLoc = gl.getUniformLocation(this.program, "model");

    gl.uniformMatrix4fv(projectionLoc, false, projection);
    gl.uniformMatrix4fv(viewLoc, false, view);
    gl.uniformMatrix4fv(modelLoc, false, model);

    gl.drawArrays(gl.POINTS, 0, this.vertexCount);
  }

  animate() {
    this.update();
    this.render();
    requestAnimationFrame(() => this.animate());
  }

  destroy() {
    window.removeEventListener("resize", () => this.resizeCanvas());
  }
}

export default function InfiniteMenu({ locale }: InfiniteMenuProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const menuRef = useRef<InfiniteGridMenu | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isArabic = locale === "ar";

  const projects = portfolioProjects;

  useEffect(() => {
    if (!canvasRef.current) return;

    try {
      menuRef.current = new InfiniteGridMenu(canvasRef.current, projects.length);
      menuRef.current.animate();
    } catch (error) {
      console.error("Failed to initialize InfiniteGridMenu:", error);
    }

    return () => {
      menuRef.current?.destroy();
    };
  }, [projects.length]);

  const handleProjectNavigation = (index: number) => {
    setCurrentIndex(index);
    if (menuRef.current) {
      menuRef.current.rotateToItem(index);
    }
  };

  const goToNextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    handleProjectNavigation(nextIndex);
  };

  const goToPreviousProject = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    handleProjectNavigation(prevIndex);
  };

  const currentProject = projects[currentIndex];
  const projectLink = currentProject.links.live || currentProject.links.github || currentProject.links.demo || "#";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* WebGL Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="infinite-menu-container max-w-7xl w-full">
          {/* Project Image - Center */}
          <div className="infinite-menu-image-wrapper">
            <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={currentProject.image}
                alt={isArabic ? currentProject.titleAr : currentProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Arrow Button - Bottom Center */}
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
              >
                <div className="infinite-menu-arrow-button">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </a>
            </div>
          </div>

          {/* Title and Description - Sides */}
          <div className={`infinite-menu-content grid grid-cols-1 ${isArabic ? "lg:grid-cols-[1fr_auto_1fr]" : "lg:grid-cols-[1fr_auto_1fr]"} gap-8 items-center mt-8 md:mt-12 px-4`}>
            {/* Title Section */}
            <div className={`infinite-menu-title ${isArabic ? "lg:order-3 text-right" : "lg:order-1 text-left"}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {isArabic ? currentProject.titleAr : currentProject.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                {isArabic ? currentProject.categoryAr : currentProject.category}
              </p>
            </div>

            {/* Navigation Buttons - Center */}
            <div className="infinite-menu-nav flex gap-4 justify-center lg:order-2 order-3">
              <button
                onClick={goToPreviousProject}
                className="infinite-menu-nav-btn prev"
                aria-label="Previous project"
              >
                <span className={`text-xl ${isArabic ? "rotate-180" : ""}`}>←</span>
              </button>
              <div className="infinite-menu-counter text-white font-mono text-sm min-w-[60px] flex items-center justify-center">
                {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </div>
              <button
                onClick={goToNextProject}
                className="infinite-menu-nav-btn next"
                aria-label="Next project"
              >
                <span className={`text-xl ${isArabic ? "rotate-180" : ""}`}>→</span>
              </button>
            </div>

            {/* Description Section */}
            <div className={`infinite-menu-description ${isArabic ? "lg:order-1 text-left" : "lg:order-3 text-right"}`}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {isArabic ? currentProject.descriptionAr : currentProject.description}
              </p>
            </div>
          </div>

          {/* Project Counter - Dots */}
          <div className="infinite-menu-dots mt-12 flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleProjectNavigation(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
