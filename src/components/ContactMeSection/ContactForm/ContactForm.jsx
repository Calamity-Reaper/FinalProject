import React, {useEffect, useState} from 'react';
import './ContactForm.css'

const ContactForm = ({isSubModalActive, setIsSubModalActive}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [valuesCorrect, setValuesCorrect] = useState({
        name: true,
        email: true,
        subject: true,
        message: true
    });


    useEffect(() => {

    }, [isSubModalActive])

    function CheckForLatNumSpace(letters, name) {
        return name.split('').every(letter => letters.toLowerCase().includes(letter.toLowerCase()))
    }

    function checkName(name) {
        const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
        if (CheckForLatNumSpace(letters, name) && letters.includes(name[0])) {
            setValuesCorrect(prevState => ({...prevState, name: true}));
            return true;
        }
        else setValuesCorrect(prevState => ({...prevState, name: false}));
    }

    function checkEmail(email) {
        if (email.match(/\S+@\S+\.\S+/)) {
            setValuesCorrect(prevState => ({...prevState, email: true}));
            return true;
        }
        else setValuesCorrect(prevState => ({...prevState, email: false}));
    }

    function checkSubjectLetter(subject) {
        const letters = "QWERTYUIOPASDFGHJKLZXCVBNM ";
        return subject.split('').every(letter => letters.toLowerCase().includes(letter.toLowerCase()));
    }

    function checkSubOrder(subject, setIsSubModalActive) {
        const order = 'make order';
        if (subject.includes(order)) setIsSubModalActive(true);
    }

    function checkSubject(subject, setIsSubModalActive) {
       if (checkSubjectLetter(subject)) {
           checkSubOrder(subject, setIsSubModalActive);
           setValuesCorrect(prevState => ({...prevState, subject: true}));
           return true;
       }
       else setValuesCorrect(prevState => ({...prevState, subject: false}));
    }

    function checkCorrectInput(values) {
        return checkName(values.name) && checkEmail(values.email) && checkSubject(values.subject, setIsSubModalActive);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (checkCorrectInput(values)) {
            localStorage.setItem('form', JSON.stringify(values));
        }
    }

    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            {!valuesCorrect.name && <span>Name must include only letters without spaces, first letter must be in UpperCase!</span>}
            <input
                className={valuesCorrect.name ? 'contact-form_input' : 'contact-form_input incorrect'}
                name='name'
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={e => setValues({...values, name: e.target.value})}
            />
            {!valuesCorrect.email && <span>Check correction of email!</span>}
            <input
                className={valuesCorrect.email ? 'contact-form_input' : 'contact-form_input incorrect'}
                name='email'
                type="email"
                placeholder="Email address"
                value={values.email}
                onChange={e => setValues({...values, email: e.target.value})}
            />
            {!valuesCorrect.subject && <span>Subject must include only letters and spaces!</span>}
            <input
                className={valuesCorrect.subject ? 'contact-form_input' : 'contact-form_input incorrect'}
                name='subject'
                type="text"
                placeholder="Subject"
                value={values.subject}
                onChange={e => setValues({...values, subject: e.target.value})}
            />
            <textarea
                className='contact-form_input message'
                name='message'
                placeholder="Your message"
                value={values.message}
                onChange={e => setValues({...values, message: e.target.value})}
            />
            <input
                className='contact-form_input submit'
                type="submit"
                value="Send Message"
            />
        </form>
    );
};

export default ContactForm;