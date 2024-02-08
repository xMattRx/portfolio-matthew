import React from 'react';
import styles from './college.module.scss'

interface CollegeProps {
  type: string;
  title: string;
  institution: string;
}

export const College: React.FC<CollegeProps> = ({ type, title, institution }) => {
  return (
    <li className={styles.formation__college}>
        <span className={styles.formation__type}>{type}</span>
        <h3 className={styles.formation__course}>{title}</h3>
        <span className={styles.formation__institution}>{institution}</span>
    </li>
  );
}

