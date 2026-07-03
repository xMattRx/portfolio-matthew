import footerContent from "./footer.json";
import styles from "./footer.module.scss";

export function Footer() {
  const { kicker, heading, headingHighlight, lede, availability, items, copyright } = footerContent;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contato" aria-label="Contato">
      <div className={styles.footer__grid} aria-hidden="true"></div>

      <div className={styles.wrap}>
        <div className={styles.cta}>
          <div className={styles.kicker}>{kicker}</div>
          <h2 className={styles.title}>
            {heading} <i>{headingHighlight}</i>
          </h2>
          <p className={styles.lede}>{lede}</p>

          <div className={styles.availability}>
            <span className={styles.availability__dot} aria-hidden="true"></span>
            {availability}
          </div>

          <div className={styles.links}>
            {items.map((item, index) => (
              <a
                key={index}
                className={styles.link}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.value}
                <span className={styles.link__arrow} aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.bottom__copy}>© {year} {copyright}</span>
          <a className={styles.bottom__top} href="#home">voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}
