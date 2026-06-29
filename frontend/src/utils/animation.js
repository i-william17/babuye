export const revealOptions = {
  root: null,
  rootMargin: '0px 0px -12% 0px',
  threshold: 0.12,
};

export function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}
