import { Subtitle } from '../../atoms/subtitle/subtitle';
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
  return (
    <section className={styles.projects} id="projetos">
      <div className={styles.projects__container}>
        <Subtitle theme="light" value="Projetos" />

        <div className={styles.projects__wrapper}>
          {[...projectsData]
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((project, index) => {
              if (typeof project.imageSrc === 'string' && project.imageSrc in imageSources) {
                return (
                  <Project
                    key={index}
                    project={{
                      ...project,
                      imageSrc: imageSources[project.imageSrc as ImageKey],
                    }}
                  />
                );
              }
              return null;
            })}
        </div>
      </div>
    </section>
  );
}
