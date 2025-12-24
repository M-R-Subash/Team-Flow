import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    let animationFrameId;
    const updateTrailingPosition = () => {
      setTrailingPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1, // 0.1 = delay factor (lower = more delay)
        y: prev.y + (position.y - prev.y) * 0.1
      }));
      animationFrameId = requestAnimationFrame(updateTrailingPosition);
    };
    
    animationFrameId = requestAnimationFrame(updateTrailingPosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="fixed pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-3 h-3 rounded-full bg-primary shadow-lg"></div>
      </div>

      {/* Trailing dot with delay */}
      <div 
        className="fixed pointer-events-none z-40 transition-transform duration-300"
        style={{
          left: `${trailingPosition.x}px`,
          top: `${trailingPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-6 h-6 rounded-full bg-primary/30 backdrop-blur-sm animate-ping"></div>
      </div>

      {/* Optional: Glow effect */}
      <div 
        className="fixed pointer-events-none z-30 transition-transform duration-500"
        style={{
          left: `${trailingPosition.x}px`,
          top: `${trailingPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm"></div>
      </div>
    </>
  );
};

export default Cursor;