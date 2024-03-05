import { useTheme } from '@/app/Context/ThemeContext';
import DarkMode from '../../molecules/darkMode/darkMode';
import Navbar from '../../molecules/navbar/navbar';
import header from './header.json';
import styles from "./header.module.scss";


export function Header() {
  const { theme } = useTheme();

  const headerClasses = [styles.header, theme === 'light' ? styles['header--light'] : styles['header--dark']].join(' ');

  const titleClasses = [styles.header__title, theme === 'light' ? '' : styles['header__title--dark']].join(' ');

  return (
    <header className={headerClasses}>
      <h1 className={titleClasses}>Matthew R. R. Nascimento</h1>
      <Navbar values={header.values} />
      <DarkMode/>
    </header>
  );
}
