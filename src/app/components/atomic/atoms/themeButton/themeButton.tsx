import React from 'react';
import { ThemeName } from '../../molecules/darkMode/darkMode';
import styles from './themeButton.module.scss';

interface ThemeButtonProps {
    themeName: ThemeName;
    gradientColors: string;
    onClick: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ themeName, gradientColors, onClick }) => {
    return (
        <div
            className={`${styles.themeButton}`}
            onClick={onClick}
            style={{ background: gradientColors }}
            aria-label={`${themeName} theme`}
        ></div>
    );
};

export default ThemeButton;
