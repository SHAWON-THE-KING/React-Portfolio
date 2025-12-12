import React, { useEffect, useState } from 'react';

const StarBg = () => {
        // id, size, positionX, positionY, delay, duration, opacity

  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateMeteors();
    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      positionX: Math.random() * 100,
      positionY: Math.random() * 100,
      duration: Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.5,
    }));

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 10
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        positionX: Math.random() * 100,
        positionY: Math.random() * 20,
        duration: Math.random() * 3 + 3,
        delay: Math.random() * 15,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.positionY}%`,
            left: `${star.positionX}%`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 3}px rgba(255,255,255,0.6)`,
          }}
        />
      ))}


        {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
            style={{
            width: `${meteor.size *50}px`,
            height: `${meteor.size}px`,
            top: `${meteor.positionY}%`,
            left: `${meteor.positionX}%`,
            animationDuration: `${meteor.duration}s`,
            animationDelay: `${meteor.delay}s`,
            opacity: meteor.opacity,
            boxShadow: `0 0 ${meteor.size * 5}px rgba(255,255,255,0.8)`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBg;
