'use client';
import { motion } from "motion/react";
import { staggerContainer, cardFade } from "../../../../motion";
import introduction from './introduction.json';
import styles from "./introduction.module.scss";

export function Introduction() {

  return (
    <main id="home" className={styles.hero}>
      <div className={styles.hero__grid} aria-hidden="true"></div>

      <div className={styles.hero__inner}>
        <motion.div
          className={styles.hero__copy}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className={styles.eyebrow} variants={cardFade}>
            <span className={styles.eyebrow__dot} aria-hidden="true"></span>
            {introduction.eyebrow}
          </motion.div>

          <motion.h1 className={styles.hero__title} variants={cardFade}>
            <span className={styles.hero__greeting}>{introduction.greeting}</span>
            {introduction.name}
          </motion.h1>

          <motion.div className={styles.hero__role} variants={cardFade}>{introduction.role}</motion.div>

          <motion.p className={styles.hero__lede} variants={cardFade}>{introduction.description}</motion.p>

          <motion.div className={styles.hero__location} variants={cardFade}>{introduction.location}</motion.div>

          <motion.div className={styles.hero__actions} variants={cardFade}>
            <a className={`${styles.btn} ${styles['btn--primary']}`} href={introduction.actions.primary.href}>
              {introduction.actions.primary.label}
            </a>
            <a className={`${styles.btn} ${styles['btn--outline']}`} href={introduction.actions.secondary.href}>
              {introduction.actions.secondary.label}
            </a>
          </motion.div>

          <motion.div className={styles.hero__social} variants={cardFade}>
            {introduction.social.map((item) => (
              <a
                key={item.label}
                className={styles.hero__socialBtn}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <div className={styles.code} aria-hidden="true">
          <div className={styles.code__win}>
            <div className={styles.code__titlebar}>
              <div className={styles.code__dots}><span></span><span></span><span></span></div>
              <div className={styles.code__tab}>portfolio.tsx</div>
            </div>
            <div className={styles.code__body}>
              <div className={styles.code__line}><span className={styles.code__ln}>1</span><span className={styles.key}>const</span> <span className={styles.var}>dev</span> <span className={styles.op}>=</span> <span className={styles.brace}>{'{'}</span></div>
              <div className={styles.code__line}><span className={styles.code__ln}>2</span>{'  '}name<span className={styles.op}>:</span> <span className={styles.str}>&quot;Matthew Nascimento&quot;</span>,</div>
              <div className={styles.code__line}><span className={styles.code__ln}>3</span>{'  '}role<span className={styles.op}>:</span> <span className={styles.str}>&quot;Front-End Developer&quot;</span>,</div>
              <div className={styles.code__line}><span className={styles.code__ln}>4</span>{'  '}focus<span className={styles.op}>:</span> <span className={styles.str}>&quot;fintech &amp; banking UI&quot;</span>,</div>
              <div className={styles.code__line}><span className={styles.code__ln}>5</span>{'  '}stack<span className={styles.op}>:</span> <span className={styles.brace}>[</span><span className={styles.str}>&quot;React&quot;</span>, <span className={styles.str}>&quot;TypeScript&quot;</span>, <span className={styles.str}>&quot;Next.js&quot;</span><span className={styles.brace}>]</span>,</div>
              <div className={styles.code__line}><span className={styles.code__ln}>6</span>{'  '}available<span className={styles.op}>:</span> <span className={styles.key}>true</span><span className={styles.cursor}>▍</span></div>
              <div className={styles.code__line}><span className={styles.code__ln}>7</span><span className={styles.brace}>{'}'}</span><span className={styles.op}>;</span></div>
            </div>
            <div className={styles.code__term}>
              <span className={styles.code__prompt}>➜</span> npm run build <span className={styles.code__ok}>✓ compiled successfully</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollCue}>
        <span>SCROLL</span>
        <span className={styles.scrollCue__line}></span>
      </div>
    </main>
  );
}
