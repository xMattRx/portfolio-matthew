import React from 'react';
import Navbar from '../../molecules/navbar/navbar';
import styles from "./header.module.scss";
import header from './header.json';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Matthew R. R. Nascimento</h1>
      <Navbar values={header.values} />
    </header>
  )
}
