import React from 'react';
import "../styles/IdleModal.css"
import useTheme from "../hooks/useTheme";
import cn from "classnames";

const IdleModal = ({isModalActive, setIsModalActive}) => {
    const {isDark} = useTheme();
    const close = () => {
        window.open("about:blank", "_self");
        window.close();
    }
    return (
        <div className={isModalActive ? 'idle-modal modal-active' : 'idle-modal'}>
            <div className={cn('idle-modal__content', {
                modalActive: isModalActive,
                dark: isDark
            })}>
                <h2>Are you still here?</h2>
                <hr/>
                <p>If you here but not going to use site press "No" and page will close.</p>
                <p>If you wont press any button page will close.</p>
                <hr/>
                <button className={isDark ? 'idle-modal__btn dark' : 'idle-modal__btn'} onClick={() => setIsModalActive(false)}>Yes</button>
                <button className={isDark ? 'idle-modal__btn dark' : 'idle-modal__btn'} onClick={() => close()}>No</button>
            </div>
        </div>
    );
};

export default IdleModal;