import { Subtitle } from "../../atoms/subtitle/subtitle";
import footerContent from "./footer.json";
import styles from "./footer.module.scss";

export function Footer() {
  const { subtitle, items } = footerContent;

  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.footer__container}>
        <Subtitle theme={'dark'} value={subtitle.value} />
        <ul className={styles.footer__contact}>
          {items.map((item, index) => (
            <li className={styles.footer__contactItem} key={index}>
              <a className={styles.footer__contactLink} target="_blank" href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
