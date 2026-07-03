'use client';
import { motion } from "motion/react";
import { staggerContainer, cardFade, viewportOnce } from "../../../../motion";
import formationData from "./formation.json";
import styles from "./formation.module.scss";

export function Formation() {
  const { kicker, subtitle, headingHighlight, college, courses, languages } = formationData;

  return (
    <section className={styles.formation} id="formação" aria-label="Formação">
      <motion.div
        className={styles.wrap}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div className={styles.kicker} variants={cardFade}>{kicker}</motion.div>
        <motion.h2 className={styles.heading} variants={cardFade}>
          {subtitle.value} <i>{headingHighlight}</i>
        </motion.h2>

        <motion.div className={styles.grid} variants={cardFade}>
          <div className={styles.degree}>
            <div className={styles.degree__badge}>{college.type}</div>
            <h3 className={styles.degree__title}>{college.title}</h3>
            <div className={styles.degree__institution}>{college.institution}</div>
            <p className={styles.degree__note}>
              Base sólida em fundamentos de software, complementada continuamente por
              cursos de mercado.
            </p>
          </div>

          <div className={styles.lists}>
            <div className={styles.block}>
              <div className={styles.block__label}>Cursos intensivos</div>
              <ul className={styles.items}>
                {courses.map((course, index) => (
                  <li className={styles.item} key={index}>
                    <span className={styles.item__name}>{course.title}</span>
                    <span className={styles.item__meta}>{course.complement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.block}>
              <div className={styles.block__label}>Idiomas</div>
              <ul className={styles.items}>
                {languages.map((lang, index) => (
                  <li className={styles.item} key={index}>
                    <span className={styles.item__name}>{lang.title}</span>
                    <span className={styles.item__meta}>{lang.complement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
