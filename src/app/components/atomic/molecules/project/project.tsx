import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './project.module.scss';

interface ProjectProps {
  project: {
    title: string;
    imageSrc: StaticImageData;
    link: string;
  };
}

const capitalizeWords = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { title, imageSrc, link } = project;

  const capitalizedTitle = capitalizeWords(title);

  return (
    <a className={styles.project__link} href={link} target="_blank" rel="noopener noreferrer">
      <div className={styles.project}>
        <Image className={styles.project__img} src={imageSrc} alt={title} width={500} height={300} />
        <p className={styles.project__legend}>{capitalizedTitle}</p>
      </div>
    </a>
  );
};

export default Project;
