import { useEffect, useRef, useState } from "react";

export const ParallaxElement = ({
  children,
  speed = 0.5,
  direction = "vertical",
  className = "",
}) => {
  const elementRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      // Calculate offset based on scroll position
      const scrollProgress = (scrolled - elementTop + windowHeight) / (windowHeight + rect.height);
      const movement = scrollProgress * 100 * speed;

      setOffset(movement);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  const transform =
    direction === "vertical"
      ? `translateY(${offset}px)`
      : `translateX(${offset}px)`;

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export const ParallaxBackground = ({ children, className = "" }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`parallax-background ${className}`}
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    >
      {children}
    </div>
  );
};
