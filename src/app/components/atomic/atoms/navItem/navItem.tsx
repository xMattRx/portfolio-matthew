import { useTheme } from '@/app/Context/ThemeContext';
import styles from "./navItem.module.scss";

interface NavItemProps {
    value: string;
}

export function NavItem({ value }: NavItemProps) {
    const { theme } = useTheme();
    
    const navItemClass = theme === 'light' ? styles['navItem--light'] : styles['navItem--dark'];

    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

    return (
        <li><a className={`${styles.navItem} ${navItemClass}`} href={`#${value}`}>{capitalizedValue}</a></li>
    );
}
