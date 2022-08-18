import React from 'react';
import "./MenuIcon.css"
import useTheme from "../../../hooks/useTheme";

const MenuIcon = ({active, setActive}) => {
    const {isDark} = useTheme();
    return (
        <div className={isDark ? 'menu-icon darkMenu' : 'menu-icon'} onClick={() => setActive(true)}>
            <div className="menu-icon__bars">
                <div className='menu-icon__bars_bar'/>
                <div className='menu-icon__bars_bar'/>
                <div className='menu-icon__bars_bar'/>
            </div>
        </div>
    );
};

export default MenuIcon;