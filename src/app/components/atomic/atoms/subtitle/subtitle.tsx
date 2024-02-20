import React from 'react';
import styles from './subtitle.module.scss';

interface SubtitleProps {
  value: string;
  theme: 'light' | 'dark';
}

export function Subtitle({ value, theme }: SubtitleProps) {
  const subtitleClasses = theme === 'light' ? styles.light : styles.dark;

  return (
    <h2 className={`${styles.subtitle} ${subtitleClasses}`}>
      {value}
    </h2>
  );
}
