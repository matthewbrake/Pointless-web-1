
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="text-center select-none">
      <h1 
        className="font-mono text-9xl md:text-[240px] font-bold text-white animate-pulse flex items-center justify-center leading-none"
        style={{ 
          animationDuration: '4s',
          // A multi-layered text shadow for a deep, glowing "shadow shadow" effect.
          textShadow: '0 0 15px rgba(255,255,255,0.3), 0 0 35px rgba(255,255,255,0.2)'
        }}
      >
        <span className="text-[1.2em] -translate-y-[0.1em]">.</span>
        <span className="ml-1 md:ml-2">&lt;</span>
      </h1>
    </div>
  );
};

export default Logo;
