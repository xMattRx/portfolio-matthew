import { useTheme } from "@/app/Context/ThemeContext";
import Image from "next/image";
import photo from '../../../../assets/perfil.png';
import introduction from './introduction.json';
import styles from "./introduction.module.scss";

export function Introduction() {

  const { theme } = useTheme();

  const titleClasses = [styles.introduction__title, theme === 'light' ? styles['introduction__title--light'] : styles['introduction__title--dark']].join(' ');

  const descriptionClasses = [styles.introduction__description, theme === 'light' ? styles['introduction__description--light'] : styles['introduction__description--dark']].join(' ');

  return (
    <main className={styles.introduction}>
      <Image className={styles.introduction__image} width={360} height={520} src={photo} alt={introduction.alt} />
      <div>
        <h1
          className={titleClasses}
          dangerouslySetInnerHTML={{ __html: introduction.title }}
        ></h1>
        <p className={descriptionClasses}>{introduction.description}</p>
      </div>
    </main>
  );
}
