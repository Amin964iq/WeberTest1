"use client"

import { motion, MotionStyle, Transition } from "motion/react"

import { cn } from "@/lib/utils"

interface BorderBeamProps {
  /**
   * The size of the border beam.
   */
  size?: number
  /**
   * The duration of the border beam.
   */
  duration?: number
  /**
   * The delay of the border beam.
   */
  delay?: number
  /**
   * The color of the border beam from.
   */
  colorFrom?: string
  /**
   * The color of the border beam to.
   */
  colorTo?: string
  /**
   * The motion transition of the border beam.
   */
  transition?: Transition
  /**
   * The class name of the border beam.
   */
  className?: string
  /**
   * The style of the border beam.
   */
  style?: React.CSSProperties
  /**
   * Whether to reverse the animation direction.
   */
  reverse?: boolean
  /**
   * The initial offset position (0-100).
   */
  initialOffset?: number
  /**
   * The border width of the beam.
   */
  borderWidth?: number
}

export const BorderBeam = ({
  className,
  size = 200,
  delay = 0,
  duration = 15,
  colorFrom = "rgba(99, 102, 241, 0.8)",
  colorTo = "rgba(168, 85, 247, 0.8)",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 2,
}: BorderBeamProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden">
      <motion.div
        className={cn(
          "absolute h-20 w-20",
          className
        )}
        style={
          {
            background: `linear-gradient(90deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
            filter: "blur(8px)",
            ...style,
          } as MotionStyle
        }
        initial={{
          x: "-100%",
          y: "-50%"
        }}
        animate={{
          x: ["0%", "100%", "100%", "0%", "0%"],
          y: ["0%", "0%", "100%", "100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
          delay: -delay,
          times: [0, 0.25, 0.5, 0.75, 1],
          ...transition,
        }}
      />
      <motion.div
        className={cn(
          "absolute h-20 w-20",
          className
        )}
        style={
          {
            background: `linear-gradient(90deg, transparent, ${colorTo}, ${colorFrom}, transparent)`,
            filter: "blur(8px)",
            ...style,
          } as MotionStyle
        }
        initial={{
          x: "50%",
          y: "50%"
        }}
        animate={{
          x: ["50%", "150%", "150%", "50%", "50%"],
          y: ["50%", "50%", "150%", "150%", "50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
          delay: -delay + (duration / 2),
          times: [0, 0.25, 0.5, 0.75, 1],
          ...transition,
        }}
      />
    </div>
  )
}
