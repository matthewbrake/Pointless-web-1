
import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import InfoPanel from './components/InfoPanel';
import Stars from './components/Stars';

// =================================================================
// Main Application Component
// Manages the global state (like mouse position) and renders
// the primary layout and effects.
// =================================================================
const App: React.FC = () => {
  // --- STATE MANAGEMENT ---
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  // --- MOUSE TRACKING EFFECT ---
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // --- DYNAMIC STYLES ---
  // This inline style is necessary for the dynamic spotlight effect,
  // as the mask position must be updated in real-time based on mouse coordinates.
  // The gradient is designed to have a bright center that fades out, like a real flashlight.
  const spotlightStyle: React.CSSProperties = {
    WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)`,
    maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)`,
  };

  // --- RENDER ---
  return (
    <div className="h-screen w-screen bg-black text-white antialiased overflow-hidden cursor-none relative">
      <Stars />
      {/* This div applies the spotlight mask to all its children */}
      <div
        className="absolute inset-0"
        style={spotlightStyle}
      >
        <div className="h-full w-full flex flex-col justify-center items-center p-4">
          <Logo />
          <InfoPanel />
        </div>
      </div>
      
       {/* Custom cursor halo to enhance the spotlight illusion */}
      <div 
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100"
        style={{ 
            left: mousePosition.x, 
            top: mousePosition.y, 
            width: '500px', 
            height: '500px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 50%)',
        }}
      />
    </div>
  );
};

export default App;