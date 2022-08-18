import React, {useEffect, useRef, useState} from 'react';
import './BlogCard.css';

const BlogCard = ({card}) => {
    const [isAppear, setIsAppear] = useState(false);
    const setAnimDetector = useRef();
    let observer = useRef();

    useEffect(() => {
        const callback = (enteries, observer) => {
            if (enteries[0].isIntersecting) {
                setIsAppear(true);
            }
            else setIsAppear(false);
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(setAnimDetector.current);
    }, [])

    return (
        <div className={isAppear ? 'blog-card appear' : 'blog-card'} ref={setAnimDetector}>
            <img src={card.imgUrl} alt={card.imgAlt}/>
            <div className="blog-card__content">
                <div className="blog-card__content__header">
                    <div className="blog-card__content__header_title">{card.title}</div>
                    <div className="blog-card__content__header__info">
                        <div className="blog-card__content__header__info_description">{card.date}//{card.user}//{card.tags}</div>
                        <div className="blog-card__content__header__info_responses">{card.responses}</div>
                    </div>
                    <hr/>
                </div>
                <div className="blog-card__content_text">{card.text}</div>
            </div>
        </div>
    );
};

export default BlogCard;