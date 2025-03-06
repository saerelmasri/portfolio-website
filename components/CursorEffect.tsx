"use client";

import type React from "react";
import { useEffect, useState } from "react";

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className="cursor-glow hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovering ? "50px" : "20px",
        height: isHovering ? "50px" : "20px",
        background: isHovering
          ? "rgba(111, 76, 255, 0.2)"
          : "rgba(111, 76, 255, 0.1)",
      }}
    />
  );
};

export default CursorEffect;
