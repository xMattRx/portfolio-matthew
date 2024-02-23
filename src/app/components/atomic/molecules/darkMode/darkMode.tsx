import { useTheme } from '@/app/Context/ThemeContext';
import Image from 'next/image';
import moonDark from '../../../../assets/moon.png';
import sunLight from '../../../../assets/sun.png';
import styles from './darkMode.module.scss';

export default function DarkMode() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={styles.darkMode} onClick={toggleTheme}>
            {theme === 'light' ? (
                <Image src={sunLight} alt="sun" width={30} height={30} />
            ) : (
                <Image className={styles.darkMode__moon} src={moonDark} alt="moon" width={30} height={30} />
            )}
        </div>
    );
}
