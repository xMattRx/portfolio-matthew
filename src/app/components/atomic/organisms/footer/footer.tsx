'use client';
import { motion } from "motion/react";
import { staggerContainer, cardFade, viewportOnce } from "../../../../motion";
import footerContent from "./footer.json";
import styles from "./footer.module.scss";

export function Footer() {
  const { kicker, heading, headingHighlight, lede, availability, items, copyright } = footerContent;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contato" aria-label="Contato">
      <div className={styles.footer__grid} aria-hidden="true"></div>

      <div className={styles.wrap}>
        <motion.div
          className={styles.cta}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div className={styles.kicker} variants={cardFade}>{kicker}</motion.div>
          <motion.h2 className={styles.title} variants={cardFade}>
            {heading} <i>{headingHighlight}</i>
          </motion.h2>
          <motion.p className={styles.lede} variants={cardFade}>{lede}</motion.p>

          <motion.div className={styles.availability} variants={cardFade}>
            <span className={styles.availability__dot} aria-hidden="true"></span>
            {availability}
          </motion.div>

          <motion.div className={styles.links} variants={cardFade}>
            {items.map((item, index) => (
              <a
                key={index}
                className={styles.link}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.value}
                <span className={styles.link__arrow} aria-hidden="true">↗</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <div className={styles.bottom}>
          <span className={styles.bottom__copy}>© {year} {copyright}</span>
          <a className={styles.bottom__top} href="#home">voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}
