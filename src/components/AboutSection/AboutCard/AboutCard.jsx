import React from 'react';
import './AboutCard.css'
import useTheme from "../../../hooks/useTheme";

const AboutCard = ({url, alt, title, description, content}) => {
    const {isDark} = useTheme();
    return (
        <div className="about-card">
            <div className="about-card__header">
                <div className="about-card__header_image">
                    <img src={url} alt={alt}/>
                </div>
                <div className="about-card__header_title">
                    {title}
                </div>
                <div className="about-card__header_description">
                    {description}
                </div>
                <div className={isDark ? "about-card__header_separator dark" : "about-card__header_separator"}/>
            </div>
            <div className="about-card_content">
                {content}
            </div>
        </div>
    );
};

export default AboutCard;