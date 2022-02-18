import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function HeaderNav(props) {


    return (
        <div className={`container-fluid nav-bar-wrapper 
        ${props.navigationStatus ? "nav-bar-wrapper-home" : "nav-bar-wrapper-contact"}`}>
            <div className="container">
                <div className="nav-bar">
                    <div className="nav-bar__logo">
                        <NavLink to="/"><img src={`
                        ${props.navigationStatus ? "./assets/images/logo-white.png" : "./assets/images/logo.png"}`} alt="logo"/></NavLink>
                    </div>
                    <div className="menu-wrap menu-burger">
                        <input type="checkbox" className="toggler">
                        </input>
                        <div className="hamburger">
                            <div className={props.navigationStatus ? "white-for-header-nav" : "black-for-header-nav"}></div>
                        </div>
                        <div className="menu">
                            <div>
                                <div>
                                    <ul>
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><NavLink to='/contact'> Contact Us </NavLink></li>
                                        <li><NavLink to='/doctors'> Doctors </NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-bar__find">
                        <div className="nav-bar__find-search" onClick={props.handleClick}>
                            <FontAwesomeIcon icon="search"/>
                        </div>
                        <div className="nav-bar__find-btn">
                            <button className="btn-primary btn">Find A Doctor</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;