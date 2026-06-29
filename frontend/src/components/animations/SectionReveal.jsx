import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function SectionReveal({ as: Component = 'div', className, children, ...props }) {
  const MotionComponent = motion.create ? motion.create(Component) : motion(Component);
  const hasIntersectionObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window;

  return (
    <MotionComponent
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      animate={!hasIntersectionObserver ? { opacity: 1, y: 0 } : undefined}
      whileInView={hasIntersectionObserver ? { opacity: 1, y: 0 } : undefined}
      viewport={hasIntersectionObserver ? { once: true, amount: 0.18 } : undefined}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
