import React from 'react';
import telegram from '../../img/Social/telegram.svg'
import instagram from '../../img/Social/instagram.svg'
import './Social.css'

const Social = () => {
    return (
        <div className='social'>
            <div className="social_text">
                i am social
                <hr/>
            </div>
            <div className="social__links">
                <a href="src/components/ContactMeSection/Social">
                    <div className="social__links_link">
                        <img src={instagram} alt="instagram"/>
                    </div>
                </a>
                <a href="https://t.me/ilya_kohanovskiy">
                    <div className="social__links_link">
                        <img src={telegram} alt="telegram"/>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Social;