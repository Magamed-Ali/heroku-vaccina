import React from 'react';
import ContainerLines from '../container-lines/ContainerLine'
import FooterFloor from "./FooterFloor";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div><ContainerLines/></div>
            <div className="container footer__content">
                <div className="row g-5 justify-content-md-start">
                    <div className="col-md-12 col-xl-4 footer__content-logo">
                        <div className="logo-img">
                            <NavLink to="/"><img src="./assets/images/logo.png" alt=""/></NavLink>
                        </div>
                        <p>It is a long established fact that a
                            <br/>
                            reader will be distracted by the
                            <br/>
                            readable.</p>
                        <div className="logo-media">
                            <a href="https://www.facebook.com/" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'facebook']}/></a>
                            <a href="https://twitter.com/" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'twitter']}/></a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'instagram']}/></a>
                            <a href="https://ru-ru.facebook.com/" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'pinterest']}/></a>
                            <a href="https://www.google.ru/" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'google']}/></a>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-3 footer__content-services">
                        <ul>
                            <h6>Services</h6>
                            <li><a href="/">Conditions</a></li>
                            <li><a href="/">Term of Use</a></li>
                            <li><a href="/">Our Services</a></li>
                            <li><a href="/">New Guests Lists</a></li>
                            <li><a href="/">The Team List</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-xl-2 footer__content-services">
                        <ul>
                            <h6>Useful Links</h6>
                            <li><a href="/">Conditions</a></li>
                            <li><a href="/">Term of Use</a></li>
                            <li><a href="/">Our Services</a></li>
                            <li><a href="/">New Guests Lists</a></li>
                            <li><a href="/">The Team List</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-xl-3 footer__content-services">
                        <h6>Subscribe</h6>
                        <p>Get The Latest Updates via email.
                            <br/>
                            Any time you may unsubscribe</p>
                        <a href=""><FontAwesomeIcon icon="phone-alt"/><span>360-779-2228</span></a>
                    </div>
                </div>
                <div><FooterFloor/></div>
            </div>
        </div>
    );
}

export default Footer;