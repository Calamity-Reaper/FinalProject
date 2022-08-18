import React, {useState} from 'react';
import SectionHeader from "../UI/SectionHeader/SectionHeader";
import './ContactMeSection.css'
import ContactForm from "./ContactForm/ContactForm";
import ContactModal from "./ContactModal/ContactModal";
import Social from "./Social";

const ContactMeSection = ({isSubModalActive, setIsSubModalActive}) => {
    return (
        <div className='contact-me' id='contact'>
            <SectionHeader title='Contact me' description="i'll be glad to answer your questions" titleColor='#f6edd8' descriptionColor='#f6edd8' isLightSeparator={true}/>
            <ContactForm isSubModalActive={isSubModalActive} setIsSubModalActive={setIsSubModalActive}/>
            <Social/>
        </div>
    );
};

export default ContactMeSection;