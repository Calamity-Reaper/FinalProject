import React from 'react';
import ribbon from '../../img/slider/Ribbon.png'
import './SliderSection.css'
import Slider from "../UI/Slider/Slider";
import useTheme from "../../hooks/useTheme";
const SliderSection = () => {
    const {isDark} = useTheme();
    return (
        <div className={isDark ? 'slider-section dark' : 'slider-section'} id='slider'>
            <div className="slider-section__header">
                <h1>RETRO</h1>
                <img src={ribbon} alt="ribbon" width={300} className='slider-section__header_image'/>
                <Slider/>
            </div>
            <div className='slider-section__greet'>
                <p>"HELLO, I'AM ILLIA KOKHANOVSKIY</p>
                <p>WELCOME TO MY PORTFOLIO!"</p>
            </div>
        </div>
    );
};

export default SliderSection;