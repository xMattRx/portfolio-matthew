import { useTheme } from "@/app/Context/ThemeContext";
import Image from "next/image";
import photo from '../../../../assets/perfil.png';
import introduction from './introduction.json';
import styles from "./introduction.module.scss";

export function Introduction() {

  return (
    <main className={styles.introduction}>
      <Image className={styles.introduction__image} width={360} height={520} src={photo} alt={introduction.alt} />
      <div>
        <h1
          className={styles.introduction__title}
          dangerouslySetInnerHTML={{ __html: introduction.title }}
        ></h1>
        <p className={styles.introduction__description}>{introduction.description}</p>
      </div>
    </main>
  );
}
