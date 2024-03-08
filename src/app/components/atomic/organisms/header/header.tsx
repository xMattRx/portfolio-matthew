import { useTheme } from '@/app/Context/ThemeContext';
import DarkMode from '../../molecules/darkMode/darkMode';
import Navbar from '../../molecules/navbar/navbar';
import header from './header.json';
import styles from "./header.module.scss";


export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Matthew R. R. Nascimento</h1>
      <Navbar values={header.values} />
      <DarkMode/>
    </header>
  );
}
