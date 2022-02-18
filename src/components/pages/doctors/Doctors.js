import React from 'react';
import Topbar from "../../shared/header/Topbar";
import HeaderNav from "../../shared/header/HeaderNav";
import Footer from "../../shared/footer/Footer";
import SearchModal from "../../shared/search-modal/SearchModal";
import PageTitleDoctor from "../../shared/page-title-doctors/PageTitleDoctor";
import PageDoctors from "../../shared/page-doctors/PageDoctors";


function Doctors(props) {

    return (
        <div>
            <div className="container">
                <Topbar navigationStatus={props.navigationStatus}/>
                <HeaderNav handleClick={props.handleClick}
                           navigationStatus={props.navigationStatus}/>
            </div>
            <PageTitleDoctor/>
            <PageDoctors/>
            <Footer/>
            <SearchModal isOpened={props.isOpened} handleClick={props.handleClick}/>
        </div>
    );
}

export default Doctors;