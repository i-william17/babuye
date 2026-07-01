import { motion } from 'framer-motion';

const flowVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction >= 0 ? '7vw' : '-7vw',
    y: 10,
    scale: 0.992,
  }),
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      x: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
      y: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.38, ease: 'easeOut' },
      scale: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction >= 0 ? '-5vw' : '5vw',
    y: -8,
    scale: 0.996,
    transition: {
      x: { duration: 0.48, ease: [0.55, 0, 0.25, 1] },
      y: { duration: 0.48, ease: [0.55, 0, 0.25, 1] },
      opacity: { duration: 0.3, ease: 'easeIn' },
      scale: { duration: 0.48, ease: [0.55, 0, 0.25, 1] },
    },
  }),
};

export default function PageTransition({ children, direction = 1 }) {
  return (
    <motion.div
      custom={direction}
      variants={flowVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: 'relative', willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
