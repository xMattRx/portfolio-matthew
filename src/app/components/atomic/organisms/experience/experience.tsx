import React from 'react';
import { Subtitle } from "../../atoms/subtitle/subtitle";
import Company from "../../molecules/company/company";
import styles from "./experience.module.scss";
import content from "./experience.json";
import Description from '../../atoms/description/description';
import { useTheme } from '@/app/Context/ThemeContext';

export function Experience() {
  const { subtitle, companies, description } = content;
  const { theme } = useTheme();

  const descriptionClasses = [styles.experience__description, theme === 'light' ? styles['experience__description--light'] : styles['experience__description--dark']].join(' ');

  return (
    <section className={styles.experience} id="experiência" aria-label="Experiência">
      <Subtitle theme={'light'} value={subtitle.value} />
      <div>
        <Description htmlContent={description} className={descriptionClasses} />
        {companies.map((company, index) => (
          <Company key={index} {...company} />
        ))}
      </div>
    </section>
  );
}
