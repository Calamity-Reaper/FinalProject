import React from 'react';
import cn from "classnames";
import useTheme from "../../../hooks/useTheme";
import './ContactModal.css'

const ContactModal = ({isSubModalActive, setIsSubModalActive}) => {
    const {isDark} = useTheme();
    return (
        <div className={isSubModalActive ? 'order-modal modal-active' : 'order-modal'}>
            <div className={cn('order-modal__content', {
                modalActive: isSubModalActive,
                dark: isDark
            })}>
                <h2>Thanks for order! <p>We will contact with you soon!</p></h2>
                <button className={isDark ? 'order-modal__btn dark' : 'order-modal__btn'} onClick={() => setIsSubModalActive(false)}>OK</button>
            </div>
        </div>
    );
};

export default ContactModal;