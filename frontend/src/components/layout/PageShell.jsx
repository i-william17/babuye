import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageShell({ children }) {
  const mainRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return undefined;

    let observer;
    const frame = window.requestAnimationFrame(() => {
      const sections = Array.from(main.querySelectorAll('section, [data-scroll-fade]'));
      const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      const canObserve = 'IntersectionObserver' in window && !prefersReducedMotion;

      sections.forEach((section, index) => {
        section.classList.add('scroll-fade');
        section.style.setProperty('--scroll-fade-delay', `${Math.min(index * 45, 180)}ms`);

        if (!canObserve) {
          section.classList.add('is-visible');
        }
      });

      if (!canObserve) return;

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.14,
      });

      sections.forEach((section) => observer.observe(section));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return <main ref={mainRef} className="overflow-x-hidden">{children}</main>;
}
