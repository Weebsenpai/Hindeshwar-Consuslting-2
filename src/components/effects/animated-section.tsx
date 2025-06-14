// src/components/effects/animated-section.tsx
'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
  threshold?: number;
  animationType?: 'slideInFromBottom' | 'slideInFromLeft' | 'slideInFromRight' | 'fadeIn';
  as?: keyof JSX.IntrinsicElements; // To allow rendering different HTML tags
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  animationType = 'slideInFromBottom',
  as: Component = 'div', // Default to 'div'
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // To animate only once
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true); 
            }, delay);
          }
        });
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay, hasAnimated]);

  const getAnimationClasses = () => {
    if (animationType === 'slideInFromBottom') {
      return {
        initial: 'opacity-0 translate-y-8', // slightly more pronounced
        visible: 'opacity-100 translate-y-0',
      };
    }
    if (animationType === 'slideInFromLeft') {
      return {
        initial: 'opacity-0 -translate-x-8',
        visible: 'opacity-100 translate-x-0',
      };
    }
    if (animationType === 'slideInFromRight') {
      return {
        initial: 'opacity-0 translate-x-8',
        visible: 'opacity-100 translate-x-0',
      };
    }
    // Default to fadeIn
    return {
      initial: 'opacity-0',
      visible: 'opacity-100',
    };
  };

  const animation = getAnimationClasses();

  return (
    <Component
      ref={sectionRef}
      className={cn(
        'transition-all duration-700 ease-out transform', // Base transition classes
        isVisible ? animation.visible : animation.initial,
        className
      )}
    >
      {children}
    </Component>
  );
}
