import React from 'react';
import "../styles/Preloader.css"

const Preloader = () => {
    return (
        <div className="preloader__item-wrapper">
            <div className="preloader__load-circle"/>
            <div className="preloader__load-text">
                <h2>LOADING</h2>
            </div>
        </div>
    );
};

export default Preloader;