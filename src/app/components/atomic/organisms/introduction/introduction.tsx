import Image from "next/image";
import photo from '../../../../assets/perfil.png';
import introduction from './introduction.json';
import styles from "./introduction.module.scss";

export function Introduction() {

  return (
    <main className={styles.introduction}>
      <Image className={styles.introduction__image} width={360} height={520} src={photo} alt={introduction.alt} priority />
      <div className={styles.introduction__content}>
        <h1
          className={styles.introduction__title}
          dangerouslySetInnerHTML={{ __html: introduction.title }}
        ></h1>
        <p className={styles.introduction__description}>{introduction.description}</p>
        <p className={styles.introduction__location}>{introduction.location}</p>
        <div className={styles.introduction__actions}>
          <a
            className={`${styles.introduction__cta} ${styles['introduction__cta--primary']}`}
            href={introduction.actions.primary.href}
          >
            {introduction.actions.primary.label}
          </a>
          <a
            className={`${styles.introduction__cta} ${styles['introduction__cta--secondary']}`}
            href={introduction.actions.secondary.href}
          >
            {introduction.actions.secondary.label}
          </a>
        </div>
      </div>
    </main>
  );
}
