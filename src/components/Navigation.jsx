import React from 'react';
import logo from "../img/header/Logo.png";
import {Link} from "react-scroll"
import "../styles/Navigation.css"
import useTheme from "../hooks/useTheme";

import cn from 'classnames'

const Navigation = ({active, setActive}) => {
    const {isDark, setIsDark} = useTheme();

    return (
        <nav className={active ? "nav__wrapper active" : "nav__wrapper"} onClick={() => setActive(false)}>
            <div className={cn("nav", {darkNav: isDark})}
                 onClick={event => event.stopPropagation()}
            >
                <div className="nav__logo">
                    <Link to="slider" offset={-150} spy={true} smooth={true} duration={500} onClick={() => setActive(false)}><img src={logo} alt="Logo" height={100} width={100}/></Link>
                </div>
                <ul className="nav__links">
                    <li className="nav__item">
                        <Link to="about" offset={-100} spy={true} smooth={true} duration={500} onClick={() => setActive(false)}>About Me</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="portfolio" offset={-100} spy={true} smooth={true} duration={500} onClick={() => setActive(false)}>Portfolio</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="blog" offset={-100} spy={true} smooth={true} duration={500} onClick={() => setActive(false)}>My Blog</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="contact" offset={-100} spy={true} smooth={true} duration={500} onClick={() => setActive(false)}>Contact Me</Link>
                    </li>
                </ul>
                <button className={cn('nav__theme-btn', {
                    dark: !isDark
                })} onClick={() => setIsDark(!isDark)}>Change them</button>
            </div>
        </nav>
    );
};

export default Navigation;