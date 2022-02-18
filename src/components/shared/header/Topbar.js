import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TopBar(props) {

    return (
        <div className={`container-fluid p-0 top-bar-wrapper 
        ${props.navigationStatus ? "top-bar-wrapper-home" : "top-bar-wrapper-contact"}`}>
            <div className="container">
                <div className="top-bar">
                    <div className="top-bar__info">
                        <div className="top-bar__mail">
                            <a href="https://mail.ru/" target="_blank"><FontAwesomeIcon icon="envelope"/></a>
                            <span>info@website.com</span>
                        </div>
                        <div className="top-bar__address">
                            <a href="https://yandex.ru/maps/213/moscow/?ll=37.622504%2C55.753215&z=10" target="_blank">
                                <FontAwesomeIcon icon="search-location"/></a>
                            <span>Oakwood, Los Angeles, CA 1098</span>
                        </div>
                    </div>
                    <div className="top-bar__social-links">
                        <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']}/></a>
                        <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
                        <a href="https://www.pinterest.es/freepik/" target="_blank"><FontAwesomeIcon icon={['fab','pinterest']}/></a>
                        <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={['fab','linkedin']}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;