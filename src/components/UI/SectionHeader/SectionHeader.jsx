import React from 'react';
import './SectionHeader.css'
import separatorDark from "../../../img/Separator/SeparatorDark.png";
import separatorLight from "../../../img/Separator/SeparatorLight.png";

const SectionHeader = ({title, description, titleColor, descriptionColor, isLightSeparator}) => {
    return (
        <div className="about-section__header">
            <div className="about-section__header_title" style={{color:titleColor}}>
                {title}
            </div>
            <div className="about-section__header_separator">
                <img src={isLightSeparator ? separatorLight : separatorDark} alt="separator"/>
            </div>
            <div className="about-section__header_description" style={{color:descriptionColor}}>
                {description}
            </div>
        </div>
    );
};

export default SectionHeader;