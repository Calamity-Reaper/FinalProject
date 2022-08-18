import React, {useEffect} from 'react';
import './ProgressBar.css'
import useTheme from "../../hooks/useTheme";

const ProgressBar = () => {
    const {isDark} = useTheme();
    useEffect(() => {
        let progressBarSetter = () => {
            const scrolledHeight = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = `${scrolledHeight / windowHeight}`;
            const bar = document.querySelector('.progress-bar__container');

            bar.style.transform = `scale(${scrollProgress}, 1)`;
        }
        document.addEventListener('scroll', progressBarSetter);

        return () => window.removeEventListener('scroll', progressBarSetter);
    }, [])

    return (
        <div className="progress-bar">
            <div className={isDark ? "progress-bar__container dark" : "progress-bar__container"}></div>
        </div>
    );
};

export default ProgressBar;