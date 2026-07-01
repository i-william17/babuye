import { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

export default function ReturnToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 520);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      className={cn(
        'focus-ring fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center border border-navy bg-white text-navy shadow-soft transition duration-300 hover:bg-navy hover:text-white sm:bottom-7 sm:right-7',
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
      type="button"
      onClick={handleClick}
      aria-label="Return to top"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M12 19V5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5 12l7-7 7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </button>
  );
}
