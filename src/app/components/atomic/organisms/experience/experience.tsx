'use client';
import { motion } from "motion/react";
import Company from "../../molecules/company/company";
import { staggerContainer, cardFade, viewportOnce } from "../../../../motion";
import styles from "./experience.module.scss";
import content from "./experience.json";

export function Experience() {
  const { kicker, subtitle, headingHighlight, companies } = content;

  return (
    <section className={styles.experience} id="experiência" aria-label="Experiência">
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

        <motion.div className={styles.timeline} variants={cardFade}>
          {companies.map((company, index) => (
            <Company key={index} {...company} current={index === 0} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
