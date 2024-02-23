import Description from "../../atoms/description/description";
import { Subtitle } from "../../atoms/subtitle/subtitle";
import { College } from "../../molecules/college/college";
import { CourseItem } from '../../molecules/courseItem/couseItem';
import formationData from "./formation.json";
import styles from "./formation.module.scss";

export function Formation() {
  const { subtitle, description, college, courses, languages } = formationData;

  return (
    <section className={styles.formation} id="formação" aria-label="Formação">
      <div className={styles.formation__container}>
        <Subtitle theme={'dark'} value={subtitle.value} />

        <div>
          <Description htmlContent={description} className={styles.formation__text} />

          <ul className={styles.formation__colleges}>
            <College type={college.type} title={college.title} institution={college.institution} />
          </ul>

          <div className={styles.formation__extra}>
            <div className={styles.formation__courses}>
              <h3 className={styles.formation__category}>Cursos intensivos</h3>
              <CourseItem items={courses} />
            </div>

            <div className={styles.formation__languages}>
              <h3 className={styles.formation__category}>Idiomas</h3>
              <CourseItem items={languages} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
