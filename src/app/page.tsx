import Image from "next/image";
import photo from './assets/perfil.png';
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <h1 className={styles.header__title}>Matthew R. R. Nascimento</h1>
      <nav>
        <ul className={styles.header__menu}>
          <li><a className={styles.header__link} href="#experiencia">Experiência</a></li>
          <li><a className={styles.header__link} href="#formacao">Formação</a></li>
          <li><a className={styles.header__link} href="#projetos">Projetos</a></li>
          <li><a className={styles.header__link} href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
    
    <main className={styles.introduction}>
      <Image  className={styles.introduction__image} width={360} height={520}  src={photo} alt="Matthew foto" />
      <div>
        <h1 className={styles.introduction__title}>Desenvolvedor<br/> Front End</h1>
        <p className={styles.introduction__description}>Localizado em Belo Horizonte &#x1F306;</p>
      </div>
    </main>

    <section className={styles.experience} id="experiencia" aria-label="Experiência">
      <h2 className="subtitle" style={{color: "#e2e2e2"}}>Experiência</h2>
      <div>
          <p className={styles.experience__description}>Sou desenvolvedor <strong>Front-End</strong> na Valtech. Curso atualmente 
            <strong> Engenharia de software</strong> na PUC Minas.</p>


          <div className={styles.company}>
            <span className={styles.company__year}>2021</span>
            <h3 className={styles.company__title}>Compass.uol</h3>
            <span className={styles.company__title}>Estágio</span>
            <p className={styles.company__description}>Durante 4 meses, a empresa nos forneceu estrutura para aprendermos React JS e suas principais funcionais e bibliotecas. Como projeto final, desenvolvemos em equipe uma aplicação que é uma espécie de clone da Netflix utilizando as principais funcionalidades do React JS</p>
            <ul className={styles.company__skills}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React JS</li>
            </ul>
          </div>
          <div className={styles.company}>
            <span className={styles.company__year}>2021</span>
            <h3 className={styles.company__title}>Compass.uol</h3>
            <span className={styles.company__title}>Estágio</span>
            <p className={styles.company__description}>Durante 4 meses, a empresa nos forneceu estrutura para aprendermos React JS e suas principais funcionais e bibliotecas. Como projeto final, desenvolvemos em equipe uma aplicação que é uma espécie de clone da Netflix utilizando as principais funcionalidades do React JS</p>
            <ul className={styles.company__skills}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React JS</li>
            </ul>
          </div>

      </div>
    </section>

    </>
    

  );
}
