import Company from "../../molecules/company/company";
import styles from "./experience.module.scss";
import content from "./experience.json";

export function Experience() {
  const { kicker, subtitle, headingHighlight, companies } = content;

  return (
    <section className={styles.experience} id="experiência" aria-label="Experiência">
      <div className={styles.wrap}>
        <div className={styles.kicker}>{kicker}</div>
        <h2 className={styles.heading}>
          {subtitle.value} <i>{headingHighlight}</i>
        </h2>

        <div className={styles.timeline}>
          {companies.map((company, index) => (
            <Company key={index} {...company} current={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
