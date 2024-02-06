import Image from "next/image";
import photo from './assets/perfil.png';
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <h1>Matthew R. R. Nascimento</h1>
      <nav>
        <ul className={styles.header__menu}>
          <li><a className={styles.header__link} href="#experiencia">Experiência</a></li>
          <li><a className={styles.header__link} href="#formacao">Formação</a></li>
          <li><a className={styles.header__link} href="#projetos">Projetos</a></li>
          <li><a className={styles.header__link} href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
    
    <main className={styles.introducao}>
      <Image className={styles.introducao__image}  src={photo} alt="Matthew foto" />
      <div>
        <h1 className={styles.introducao__title}>Desenvolvedor<br/> Front End</h1>
        <p>Localizado em Belo Horizonte &#x1F306;</p>
      </div>
    </main>

    </>
    

  );
}
