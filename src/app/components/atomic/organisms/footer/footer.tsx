import { FooterItem } from "../../atoms/footerItem/footerItem";
import { Subtitle } from "../../atoms/subtitle/subtitle";
import styles from "./footer.module.scss";
import footerContent from "./footer.json";

export function Footer() {
  const { subtitle, items } = footerContent;

  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.footer__container}>
        <Subtitle color={subtitle.color} value={subtitle.value} />
        <ul className={styles.footer__contact}>
          {items.map((item, index) => (
            <FooterItem key={index} href={item.href} value={item.value} />
          ))}
        </ul>
      </div>
    </footer>
  );
}
