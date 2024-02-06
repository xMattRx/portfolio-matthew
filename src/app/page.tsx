import styles from "./page.module.scss";

export default function Home() {
  return (
    <header className={styles.header}>
      <h1>Matthew R. R. Nascimento</h1>
      <nav>
        <ul className={styles.header__menu}>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
