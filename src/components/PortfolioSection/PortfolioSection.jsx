import React, {useEffect, useState} from 'react';
import './PortfolioSection.css'
import SectionHeader from "../UI/SectionHeader/SectionHeader";
import {filterBtns} from "./filterBtns";
import FilterBtn from "../UI/FilterBtn/FilterBtn";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import portfolioCardsData from './PortfolioCard/PortfolioCardData.json'
import {filterPortfolioCards, usePortfolioCards} from "../../utils/filterProtfolioCards";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import useTheme from "../../hooks/useTheme";

const PortfolioSection = () => {
    const {isDark} = useTheme();
    const takeFilters = (filterBtns) => {
        const obj = {};
        filterBtns.forEach((btn) => {
            obj[btn.name] = false;
        });
        return obj;
    }
    const [filter, setFilter] = useState(takeFilters(filterBtns));
    const [initialCards, setInitialCards] = useState([...portfolioCardsData]);
    const [displayCards, setDisplayCards] = useState(initialCards.slice(0, 6));
    const [isBrowseAll, setIsBrowseAll] = useState(false);


    useEffect(() => {
        setDisplayCards(filterPortfolioCards(initialCards, filter));
    }, [filter, initialCards]);
    return (
        <div className={isDark ? 'portfolio dark' : 'portfolio'} id='portfolio'>
            <SectionHeader title='Portfolio' description='SIMPLICITY IS THE ULTIMATE SOPHISTICATION' titleColor={isDark ? '#e6e1d0' : '#3a3a3a'} descriptionColor={isDark ? '#e6e1d0' : '#38353e'} isLightSeparator={isDark}/>
            <div className="portfolio__content">
                <div className="portfolio__content__filters">
                    <div className="portfolio__content__filters_text">
                        Filter by
                    </div>
                    <div className="portfolio__content__filters_btns">
                        {filterBtns.map((btn, i) =>
                            <FilterBtn filterName={btn.name} filter={filter} setFilter={setFilter} key={i}/>
                        )}
                    </div>
                </div>
                <div className="portfolio__content__cards">
                    <TransitionGroup component={null}>
                        {displayCards.map((cardData, i) =>
                            <CSSTransition
                                key={i}
                                timeout={500}
                                classNames='portfolio-cards'
                            >
                               <PortfolioCard cardData={cardData} />
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </div>
                <div className="portfolio__content_all-btn">
                    <hr/>
                    {isBrowseAll
                        ?
                            <span onClick={() => {
                                for (const key in filter) {
                                    setFilter(prevState => ({...prevState, [key]: false}))
                                }
                                setIsBrowseAll(false);
                            }}>Hide</span>

                        :
                            <span onClick={() => {
                                for (const key in filter) {
                                    setFilter(prevState => ({...prevState, [key]: true}))
                                }
                                setIsBrowseAll(true);
                            }}>Browse All</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;