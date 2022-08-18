import React, {useState} from 'react';
import {images} from './sliderImages.js'
import './Slider.css'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
    return (
        <div className='slider'>
            <div className="slider__image__arrow left_arrow" onClick={prevSlide}><span  style={{left: 0}}>❰</span></div>
            <div className="slider__image__arrow right_arrow" onClick={nextSlide}><span style={{right: 0}}>❱</span></div>
            {images.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? 'slide active-slide' : 'slide'} key={index}>
                        {index === currentSlide && <img src={slide.url} alt={slide.alt} className='slider__image'/>}
                    </div>
                )
            })}
            <h3>KODAK CAMERA</h3>
        </div>
    );
};

export default Slider;