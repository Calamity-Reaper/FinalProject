import './styles/App.css';
import Preloader from "./components/Preloader";
import React, {useEffect, useState} from "react";
import Navigation from "./components/Navigation";
import {animated, useTransition} from "react-spring";
import "./styles/Preloader.css"
import MenuIcon from "./components/UI/MenuIcon/MenuIcon";
import {ThemeProvider} from "./providers/ThemeProvider";
import {useIdleTimer} from 'react-idle-timer'
import IdleModal from "./components/IdleModal";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import SliderSection from "./components/SliderSection/SliderSection";
import AboutSection from "./components/AboutSection/AboutSection";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import BlogSection from "./components/BlogSection/BlogSection";
import ContactMeSection from "./components/ContactMeSection/ContactMeSection";
import ContactModal from "./components/ContactMeSection/ContactModal/ContactModal";


function App() {
    const [showLoader, setShowLoader] = useState(true);
    const [isNavActive, setIsNavActive] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);
    const [isSubModalActive, setIsSubModalActive] = useState(false);

    const preloaderTransition = useTransition(showLoader, {
        enter: {y:0},
        leave: {y:3000, zIndex: 20},
        config: {duration: 2000}
    });

    let idleTimeout = null;

    function setIdleTimeout() {
        return setTimeout(() => {
            window.open("about:blank", "_self");
            window.close();
        },15000);
    }


    useEffect(() => {
        if(isModalActive) idleTimeout = setIdleTimeout();
    }, [isModalActive]);

    useEffect(() => {
        if(isModalActive || showLoader) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
    }, [isModalActive, showLoader])

    setTimeout(() => setShowLoader(false),5000);

    const onIdle = () => {
        setIsModalActive(true);
    }

    const onActive = () => {
        clearTimeout(idleTimeout);
    }

    const idleTimer = useIdleTimer({
        onIdle,
        onActive,
        timeout: 1000*60
    });


  return (
      <ThemeProvider>
        <div>
            <ContactModal isSubModalActive={isSubModalActive} setIsSubModalActive={setIsSubModalActive}/>
            <IdleModal isModalActive={isModalActive} setIsModalActive={setIsModalActive}/>
            {preloaderTransition((style, item) =>
                item && <animated.div style={style} className="preloader"><Preloader/></animated.div>
            )}
            <ProgressBar/>
            <header style={{position: 'sticky', top: 0, zIndex: 7}}>
                <Navigation active={isNavActive} setActive={setIsNavActive}/>
                <MenuIcon active={isNavActive} setActive={setIsNavActive}/>
            </header>

            <main>
                <SliderSection/>
                <AboutSection/>
                <PortfolioSection/>
                <BlogSection/>
                <ContactMeSection isSubModalActive={isSubModalActive} setIsSubModalActive={setIsSubModalActive}/>
            </main>
        </div>
      </ThemeProvider>
  );
}

export default App;
