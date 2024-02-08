import React from 'react';
import Description from "../../atoms/description/description";
import { Subtitle } from "../../atoms/subtitle/subtitle";
import { College } from "../../molecules/college/college";
import styles from "./formation.module.scss";
import formationData from "./formation.json";
import { CourseItem } from '../../molecules/courseItem/couseItem';

export function Formation() {
  const { subtitle, description, college, courses } = formationData;

  return (
    <section className={styles.formation} id="formação" aria-label="Formação">
      <div className={styles.formation__container}>
        <Subtitle color={subtitle.color} value={subtitle.value} />

        <div>
          <Description htmlContent={description} className={styles.formation__text} />

          <ul className={styles.formation__colleges}>
            <College type={college.type} title={college.title} institution={college.institution} />
          </ul>

          <div className={styles.formation__extra}>
            {courses.map((course, index) => (
              <div key={index} className={styles[`formation__${course.category}`]}>
                <CourseItem title={course.title} complement={course.complement} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
