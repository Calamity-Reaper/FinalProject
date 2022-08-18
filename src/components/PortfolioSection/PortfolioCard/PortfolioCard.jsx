import React, {useState} from 'react';
import './PortfolioCard.css'

const PortfolioCard = ({cardData}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="portfolio-card" onClick={() => setIsActive(!isActive)}>
            <div className={isActive ? "portfolio-card__info active" : "portfolio-card__info"}>
                <div className="portfolio-card__info__title">{cardData.title}</div>
                <hr/>
                <div className="portfolio-card__info__description">{cardData.description}</div>
                <hr/>
                <div className="portfolio-card__info__footer">
                    <div className="portfolio-card__info__stack"><b>Stack:</b> {cardData.stack}</div>
                    <div className="portfolio-card__info__date">Date: {cardData.date}</div>
                </div>
            </div>
            <div className="portfolio-card__image-wrapper">
                <img src={cardData.imgUrl} alt={cardData.imgAlt} className='portfolio-card_img'/>
                <div className="portfolio-card__icon">
                    <img src={cardData.iconUrl} alt={cardData.iconAlt} />
                </div>
            </div>
            <div className="portfolio-card__title">
                {cardData.title}
            </div>
        </div>
    );
};

export default PortfolioCard;