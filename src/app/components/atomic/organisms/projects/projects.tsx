import Image from 'next/image';
import Project from '../../molecules/project/project';
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
        <div className={styles.kicker}>// projetos</div>
        <h2 className={styles.heading}>
          Projetos <i>em destaque</i>
        </h2>

        <div className={styles.grid}>
          {featured.map((project, index) => {
            const imageSrc =
              project.imageSrc in imageSources
                ? imageSources[project.imageSrc as ImageKey]
                : null;

            if (!imageSrc) return null;

            return (
              <Project
                key={index}
                project={{ ...project, imageSrc: imageSrc as any }}
              />
            );
          })}
        </div>

        <div className={styles.more}>
          <div className={styles.more__head}>
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
          </div>

          <ul className={styles.thumbGrid}>
            {others.map((project, index) => {
              const imageSrc =
                project.imageSrc in imageSources
                  ? imageSources[project.imageSrc as ImageKey]
                  : null;

              return (
                <li key={index}>
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
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
