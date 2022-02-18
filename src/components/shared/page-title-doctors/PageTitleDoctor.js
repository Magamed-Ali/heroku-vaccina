import React from 'react';
import {NavLink} from "react-router-dom";

function PageTitleDoctor(props) {
    return (
        <div className="page-title-contact">
            <div className="title-wrapper">
                <h1>Doctors</h1>
                <ul className="bread-crumbs">
                    <li><NavLink to='/' className="bread-crumbs__link"> Home </NavLink></li>
                    <li className="separate">/</li>
                    <li><NavLink to="/" className="bread-crumbs__link active" >Doctors</NavLink> </li>
                </ul>
            </div>
        </div>
    );
}

export default PageTitleDoctor;