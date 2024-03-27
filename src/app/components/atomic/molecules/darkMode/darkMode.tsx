import { useTheme } from '@/app/Context/ThemeContext';
import Image from 'next/image';
import moonDark from '../../../../assets/moon.png';
import sunLight from '../../../../assets/sun.png';
import ThemeButton from '../../atoms/themeButton/themeButton';
import styles from './darkMode.module.scss';

const themes: { [key in ThemeName]: string } = {
    forest: 'linear-gradient(#79C285, #B1D8B7)',
    sunset: 'linear-gradient(#ff6e40, #FF9E7F)',
    snow: 'linear-gradient(#00FFFF, #66FFFF)'
};

export type ThemeName = 'forest' | 'sunset' | 'snow';


export default function DarkMode() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const changeTheme = (newTheme: ThemeName): void => {
        setTheme(newTheme);
    };

    return (
        <div
            className={styles.darkMode}
            role="button"
            tabIndex={0}
        >
            {Object.entries(themes).map(([themeName, gradientColors]) => (
                <ThemeButton
                    key={themeName}
                    themeName={themeName as ThemeName}
                    gradientColors={gradientColors}
                    onClick={() => changeTheme(themeName as ThemeName)}
                />
            ))}
            <div onClick={toggleTheme}>
                {(theme === 'light' || theme === 'dark') ? (
                    theme === 'light' ? (
                        <Image src={sunLight} alt="sun" width={30} height={30} />
                    ) : (
                        <Image className={styles.darkMode__moon} src={moonDark} alt="moon" width={30} height={30} />
                    )
                ) : (
                    <Image
                        className={theme !== 'forest' ? styles.darkMode__sun : ''}
                        src={sunLight}
                        alt="sun"
                        width={30}
                        height={30}
                    />
                )}
            </div>
        </div>
    );
}
