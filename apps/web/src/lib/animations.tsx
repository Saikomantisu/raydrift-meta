import { motion, type Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Standard easing curve for consistent animations across the app.
 */
export const easeOut: [number, number, number, number] = [0.4, 0, 0.2, 1];

/**
 * Animation variants for staggered container animations.
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Animation variants for individual items within a container.
 */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

/**
 * Animation variants for card animations with larger Y offset.
 */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

/**
 * Fast stagger container for grid/list animations.
 */
export const fastContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container component that staggers animation of its children.
 */
export function AnimatedContainer({
  children,
  className = 'contents',
}: AnimatedContainerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isClient ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Individual animated item for use within AnimatedContainer.
 */
export function AnimatedItem({ children, className }: AnimatedItemProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

interface AnimatedScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Fade-in animation component for scroll-triggered elements.
 */
export function AnimatedScroll({
  children,
  delay = 0.8,
  className,
}: AnimatedScrollProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isClient ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
