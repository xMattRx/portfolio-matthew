import type { Variants } from 'motion/react';

// Easing suave, sem bounce — combina com a estética técnica/limpa.
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Config padrão de viewport para animações on-scroll:
// dispara quando ~20% da seção entra na viewport e não repete.
export const viewportOnce = { once: true, amount: 0.2 } as const;

// Fade + slide-up para as seções principais.
export const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

// Container que escalona (stagger) a entrada dos filhos.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

// Item de card (usado com staggerContainer) — fade + slide-up sutil.
export const cardFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};
