import React from 'react';
import './AboutSection.css'
import separator from '../../img/Separator/SeparatorDark.png'
import {aboutCardData} from "./aboutCardData";
import AboutCard from "./AboutCard/AboutCard";
import SectionHeader from "../UI/SectionHeader/SectionHeader";
import useTheme from "../../hooks/useTheme";

const AboutSection = () => {
    const {isDark} = useTheme();
    return (
        <div className={isDark ? 'about-section dark' : 'about-section'} id='about'>
            <SectionHeader title={'About me'} description={'I\'am front-end developer from Ukraine'} titleColor={isDark ? '#e6e1d0' : '#3a3a3a'} descriptionColor={isDark ? '#e6e1d0' : '#38353e'} isLightSeparator={isDark}/>
            <div className="about-section__content">
                {aboutCardData.map((card, index) => {
                    return (
                        <div key={card.alt}>
                            <AboutCard url={card.url} alt={card.alt} title={card.title} description={card.description} content={card.content} key={card.title}/>
                            {(index !== aboutCardData.length - 1) && <hr key={index}/>}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default AboutSection;