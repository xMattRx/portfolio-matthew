import React from 'react';
import { NavItem } from '../../atoms/navItem/navItem';
import styles from "./navbar.module.scss";

interface NavbarProps {
  values: string[];
}

const Navbar: React.FC<NavbarProps> = ({ values }) => {
  return (
    <nav>
      <ul className={styles.navbar}>
        {values.map((value, index) => (
          <NavItem key={index} value={value} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
