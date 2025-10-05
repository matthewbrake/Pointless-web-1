
import React, { useState, useEffect } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
}

const Stars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const numStars = window.innerWidth > 768 ? 400 : 200; // More, finer stars
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 1.5 + 0.5, // Size between 0.5px and 2px
          animationDuration: `${Math.random() * 5 + 5}s`, // Slower duration between 5s and 10s
          animationDelay: `${Math.random() * 10}s`, // Delay up to 10s
          opacity: Math.random() * 0.4 + 0.2, // Random initial opacity
        });
      }
      setStars(newStars);
    };

    generateStars();
    // In a full app, a resize handler could be added here to regenerate stars.
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          /*
            These inline styles are crucial for creating the random, dynamic
            starfield effect. Each star needs a unique position, size, and animation
            timing, which cannot be achieved with static Tailwind classes alone.
          */
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;