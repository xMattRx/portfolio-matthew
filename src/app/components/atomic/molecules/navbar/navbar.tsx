import React from 'react';
import { NavItem } from '../../atoms/navItem/navItem';
import styles from "./navbar.module.scss";

interface NavbarProps {
  values: string[];
}

const Navbar: React.FC<NavbarProps> = ({ values }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {values.map((value, index) => (
          <NavItem key={index} value={value} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
