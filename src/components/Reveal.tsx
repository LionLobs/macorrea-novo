import type { ReactNode, ElementType, CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";

type Variant = "up" | "left" | "right" | "fade" | "zoom";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const variantClass: Record<Variant, string> = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  fade: "reveal-fade",
  zoom: "reveal-zoom",
};

export function Reveal({ children, as: Tag = "div", variant = "up", delay = 0, className = "", style }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`${variantClass[variant]} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
