import React, {useEffect, useRef, useState} from 'react';
import SectionHeader from "../UI/SectionHeader/SectionHeader";
import blogCardsData from './blogCardData.json';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './BlogSection.css';
import BlogCard from "./BlogCard/BlogCard";
import useTheme from "../../hooks/useTheme";

const BlogSection = () => {
    const {isDark} = useTheme();

    const [initialCards, setInitialCards] = useState([...blogCardsData]);
    const [displayCards, setDisplayCards] = useState(initialCards.slice(0, 3));
    const [isInfinitePaginationActive, setIsInfinitePaginationActive] = useState(false);
    const [isBrowseAll, setIsBrowseAll] = useState(false);
    const [postsCount, setPostsCount] = useState(3);
    const inifiniteScrollDetector = useRef();
    let observer = useRef();
    useEffect(() => {
        if (postsCount > 3) {
            setDisplayCards([...displayCards, ...initialCards.slice(postsCount-3, postsCount)]);
        }
    },[postsCount])

    useEffect(() => {
        if(observer.current) observer.current.disconnect();
        if (isBrowseAll) {
            const callback = (enteries, observer) => {
                if (enteries[0].isIntersecting && postsCount <= initialCards.length) {
                   setPostsCount(postsCount+3);
                }
            };
            observer.current = new IntersectionObserver(callback);
            observer.current.observe(inifiniteScrollDetector.current);
        }
    }, [postsCount, isBrowseAll])

    return (
        <div className={isDark ? 'blog-section dark' : 'blog-section'} id='blog'>
            <SectionHeader title='My Blog' description='News from my house' titleColor={isDark ? '#e6e1d0' : '#3a3a3a'} descriptionColor={isDark ? '#e6e1d0' : '#38353e'} isLightSeparator={isDark}/>
            <TransitionGroup>
                {displayCards.map((card, i) =>
                    <CSSTransition
                        key={i}
                        timeout={500}
                        classNames='blog-card'
                    >
                        <BlogCard card={card} />
                    </CSSTransition>
                )}
            </TransitionGroup>
            {isInfinitePaginationActive && <div ref={inifiniteScrollDetector} style={{height: 10, backgroundColor: 'transparent'}}/>}
            <div className="blog-section__all-btn">
                <hr/>
                {isBrowseAll
                    ?
                        <span onClick={() => {
                            setIsInfinitePaginationActive(false)
                            setIsBrowseAll(false);
                            setPostsCount(3);
                            setDisplayCards(initialCards.slice(0, 3));
                        }}>
                           hide posts
                        </span>
                    :
                        <span onClick={() => {
                            setIsInfinitePaginationActive(true)
                            setIsBrowseAll(true);
                        }}>
                            show all posts
                        </span>
                }
            </div>
        </div>
    );
};

export default BlogSection;