import { useEffect, useState, useRef } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const lastUpdateTime = useRef(Date.now());
  const rafId = useRef(null);

  useEffect(() => {
    let movementTimeout;

    const updatePosition = (e) => {
      const currentTime = Date.now();
      
      // Cancel previous animation frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      // Use requestAnimationFrame for smooth updates
      rafId.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsMoving(true);
      });

      // Clear existing timeout
      if (movementTimeout) {
        clearTimeout(movementTimeout);
      }

      // Set timeout to detect when mouse stops
      movementTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 150);

      // Add trail less frequently (every 100ms instead of 50ms)
      if (currentTime - lastUpdateTime.current > 100) {
        setTrails((prev) => [
          ...prev.slice(-5), // Keep only last 5 trails (reduced from 8)
          {
            x: e.clientX,
            y: e.clientY,
            id: currentTime,
          },
        ]);
        lastUpdateTime.current = currentTime;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (movementTimeout) {
        clearTimeout(movementTimeout);
      }
    };
  }, []);

  // Clear trails when mouse stops moving
  useEffect(() => {
    if (!isMoving) {
      const fadeOutInterval = setInterval(() => {
        setTrails((prev) => {
          if (prev.length === 0) {
            clearInterval(fadeOutInterval);
            return prev;
          }
          return prev.slice(1);
        });
      }, 80);

      return () => clearInterval(fadeOutInterval);
    }
  }, [isMoving]);

  // Hide on mobile/touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isPointer ? "scale(1.5)" : "scale(1)",
        }}
      />

      {/* Cursor ring */}
      <div
        className="custom-cursor-ring"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isPointer ? "scale(1.8)" : "scale(1)",
        }}
      />

      {/* Trail dots - only show when moving */}
      {isMoving && trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: (index + 1) / trails.length,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </>
  );
};
