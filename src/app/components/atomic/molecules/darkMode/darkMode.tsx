import { useTheme } from '@/app/Context/ThemeContext';
import Image from 'next/image';
import React from 'react';
import moonDark from '../../../../assets/moon.png';
import sunLight from '../../../../assets/sun.png';
import styles from './darkMode.module.scss';

export default function DarkMode() {
    const { theme, setTheme } = useTheme();
    
    const toggleTheme = (e: React.MouseEvent<HTMLDivElement>) => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        if (theme === 'light') {
            document.body.style.background = '#000000'; 
        } else {
            document.body.style.background = 'inherit';
        }
    };

    return (
        <div
            className={styles.darkMode}
            onClick={toggleTheme}
            role="button"
            tabIndex={0}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <Image src={sunLight} alt="sun" width={30} height={30} />
            ) : (
                <Image className={styles.darkMode__moon} src={moonDark} alt="moon" width={30} height={30} />
            )}
        </div>
    );
}
