import React from 'react';
import { Subtitle } from '../../atoms/subtitle/subtitle';
import Project from '../../molecules/project/project';
import styles from './projects.module.scss';
import projectsData from './projects.json'; 
import bikcraftImage from '@/app/assets/bikcraft.png';
import disneyImage from '@/app/assets/disney-plus.jpg';
import ghibliImage from '@/app/assets/ghibli.png';
import jordanImage from '@/app/assets/jordan.png';
import loginImage from '@/app/assets/login.png';
import uolflixImage from '@/app/assets/uolflix.png';
import blogImage from '@/app/assets/blog.jpg';

type ImageKey = keyof typeof imageSources;

const imageSources = {
  blog: blogImage,
  uolflix: uolflixImage,
  bikcraft: bikcraftImage,
  disney: disneyImage,
  jordan: jordanImage,
  login: loginImage,
  ghibli: ghibliImage,
};

export default function Projects() {
  return (
    <section className={styles.projects} id="projetos">
      <div className={styles.projects__container}>
        <Subtitle theme="light" value="Projetos" />

        <div className={styles.projects__wrapper}>
          {projectsData.map((project, index) => {
            if (typeof project.imageSrc === 'string' && project.imageSrc in imageSources) {
              return (
                <Project key={index} project={{ ...project, imageSrc: imageSources[project.imageSrc as ImageKey] }} />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
