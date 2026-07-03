'use client';

import { useState } from 'react';
import Navbar from '../../molecules/navbar/navbar';
import header from './header.json';
import styles from "./header.module.scss";

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={styles.nav__inner}>
        <a href="#home" className={styles.logo}>
          M<span className={styles.logo__dot}>.</span>N
        </a>

        <Navbar values={header.values} />

        <button
          className={styles.burger}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mmenu}>
          <button
            className={styles.mmenu__close}
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          {header.values.map((value) => (
            <a
              key={value}
              href={`#${value}`}
              className={styles.mmenu__link}
              onClick={() => setMenuOpen(false)}
            >
              {capitalize(value)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
