import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './project.module.scss';

interface ProjectProps {
  project: {
    title: string;
    mainTech: string;
    description: string;
    stack: string[];
    imageSrc: StaticImageData;
    link: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { title, mainTech, description, stack, imageSrc, link } = project;

  return (
    <a className={styles.card} href={link} target="_blank" rel="noopener noreferrer">
      <div className={styles.card__media}>
        <Image className={styles.card__img} src={imageSrc} alt={title} width={640} height={400} />
      </div>

      <div className={styles.card__body}>
        <span className={styles.card__tech}>{mainTech}</span>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__desc}>{description}</p>

        <ul className={styles.card__tags}>
          {stack.map((tag, index) => (
            <li className={styles.card__tag} key={index}>{tag}</li>
          ))}
        </ul>

        <span className={styles.card__cta}>
          Ver projeto <span className={styles.card__arrow} aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
};

export default Project;
