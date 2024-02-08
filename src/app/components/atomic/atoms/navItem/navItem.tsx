import React from 'react'
import styles from "./navItem.module.scss";

interface NavItemProps {
    value: string;
  }

export function NavItem({value}:NavItemProps) {
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
  return (
    <li><a className={styles.navItem} href={`#${value}`}>{capitalizedValue}</a></li>
  )
}
