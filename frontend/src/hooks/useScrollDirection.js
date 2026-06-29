import { useEffect, useState } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const scrollY = window.scrollY;
      const nextDirection = scrollY > lastScrollY && scrollY > 90 ? 'down' : 'up';

      if (nextDirection !== direction) {
        setDirection(nextDirection);
      }

      lastScrollY = Math.max(scrollY, 0);
    };

    window.addEventListener('scroll', updateDirection, { passive: true });
    return () => window.removeEventListener('scroll', updateDirection);
  }, [direction]);

  return direction;
}
