import React from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  children: React.ReactNode;
  type?: "fade-up" | "fade" | "slide-left" | "slide-right" | "zoom";
  delay?: number;    // ms
  duration?: number; // ms
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  type = "fade-up",
  delay = 0,
  className = "",
  once = true,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({
    once,
    rootMargin: "0px 0px -10% 0px",
  });

  const hidden = {
    "fade-up": "opacity-0 translate-y-6",
    "fade": "opacity-0",
    "slide-left": "opacity-0 -translate-x-6",
    "slide-right": "opacity-0 translate-x-6",
    "zoom": "opacity-0 scale-95",
  }[type];

  const show = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 will-change-transform",
        inView ? show : hidden,
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms`, transitionTimingFunction: "cubic-bezier(.2,.65,.2,1)" }}
    >
      {children}
    </div>
  );
}
