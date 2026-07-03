'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Project from '../../molecules/project/project';
import { staggerContainer, cardFade, viewportOnce } from '../../../../motion';
import projectsData from './projects.json';
import styles from './projects.module.scss';

declare const require: {
  context(dir: string, includeSubdirs: boolean, filter: RegExp): any;
};

function importAllImages() {
  const images = require.context('@/app/assets', false, /\.(png|jpe?g|svg)$/);
  return images.keys().reduce((imageSources: Record<string, string>, key: string) => {
    const imageName = key.replace(/^.*[\\/]/, '').split('.')[0];
    imageSources[imageName] = images(key).default;
    return imageSources;
  }, {});
}

const imageSources = importAllImages();

type ImageKey = keyof typeof imageSources;

export default function Projects() {
  const { featured, others } = projectsData;

  return (
    <section className={styles.projects} id="projetos" aria-label="Projetos">
      <div className={styles.wrap}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div className={styles.kicker} variants={cardFade}>// projetos</motion.div>
          <motion.h2 className={styles.heading} variants={cardFade}>
            Projetos <i>em destaque</i>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {featured.map((project, index) => {
            const imageSrc =
              project.imageSrc in imageSources
                ? imageSources[project.imageSrc as ImageKey]
                : null;

            if (!imageSrc) return null;

            return (
              <motion.div className={styles.gridItem} variants={cardFade} key={index}>
                <Project project={{ ...project, imageSrc: imageSrc as any }} />
              </motion.div>
            );
          })}
        </motion.div>

        <div className={styles.more}>
          <motion.div
            className={styles.more__head}
            variants={cardFade}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <span className={styles.more__label}>
              Outros projetos <span className={styles.more__count}>({others.length})</span>
            </span>
            <a
              className={styles.more__all}
              href="https://github.com/xMattRx?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              ver todos no GitHub ↗
            </a>
          </motion.div>

          <motion.ul
            className={styles.thumbGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {others.map((project, index) => {
              const imageSrc =
                project.imageSrc in imageSources
                  ? imageSources[project.imageSrc as ImageKey]
                  : null;

              return (
                <motion.li variants={cardFade} key={index}>
                  <a
                    className={styles.thumb}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.thumb__media}>
                      {imageSrc ? (
                        <Image
                          className={styles.thumb__img}
                          src={imageSrc as any}
                          alt={project.title}
                          width={320}
                          height={200}
                        />
                      ) : (
                        <span className={styles.thumb__placeholder} aria-hidden="true">
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="m21 15-5-5L5 21" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <span className={styles.thumb__title}>{project.title}</span>
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
