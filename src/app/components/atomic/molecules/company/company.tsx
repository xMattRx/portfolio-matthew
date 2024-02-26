import React from 'react';
import styles from "./company.module.scss";
import { useTheme } from '@/app/Context/ThemeContext';

interface CompanyProps {
  year: string;
  title: string;
  role: string;
  description: string;
  skills: string[];
}

const Company: React.FC<CompanyProps> = ({ year, title, role, description, skills }) => {

  const { theme } = useTheme();

  const yearClasses = [styles.company__year, theme === 'light' ? styles['company__year--light'] : styles['company__year--dark']].join(' ');

  return (
    <div className={styles.company}>
      <span className={yearClasses}>{year}</span>
      <h3 className={styles.company__title}>{title}</h3>
      <span className={styles.company__role}>{role}</span>
      <p className={styles.company__description}>{description}</p>
      <ul className={styles.company__skills}>
        {skills.map((skill, index) => (
          <li className={styles.company__skill} key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Company;
