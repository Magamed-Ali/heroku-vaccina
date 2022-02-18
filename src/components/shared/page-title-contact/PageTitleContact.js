import React from 'react';
import {NavLink} from "react-router-dom";

function PageTitleContact(props) {
    return (
        <div className="page-title-contact">
            <div className="title-wrapper">
                <h1>Contact Us</h1>
                <ul className="bread-crumbs">
                    <li><NavLink to='/' className="bread-crumbs__link"> Home </NavLink></li>
                    <li className="separate">/</li>
                    <li><NavLink to="/" className="bread-crumbs__link active" >Contact Us</NavLink> </li>
                </ul>
            </div>
        </div>
    );
}

export default PageTitleContact;