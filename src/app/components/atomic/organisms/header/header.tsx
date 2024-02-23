import { useTheme } from '@/app/Context/ThemeContext';
import DarkMode from '../../molecules/darkMode/darkMode';
import Navbar from '../../molecules/navbar/navbar';
import header from './header.json';
import styles from "./header.module.scss";

export function Header() {
  const { theme, setTheme } = useTheme();

  const headerClasses = [styles.header, theme === 'light' ? styles['header--light'] : styles['header--dark']].join(' ');

  return (
    <header className={headerClasses}>
      <h1 className={styles.header__title}>Matthew R. R. Nascimento</h1>
      <DarkMode/>
      <Navbar values={header.values} />
    </header>
  );
}
