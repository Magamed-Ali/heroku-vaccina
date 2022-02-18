import React from 'react';
import HeaderNav from "../../shared/header/HeaderNav";
import Topbar from "../../shared/header/Topbar";
import PicturesLine from "../../shared/pictures-line/PicturesLine";
import Footer from "../../shared/footer/Footer";
import ContainerHead from "../../shared/container-head/ContainerHead";
import SearchModal from "../../shared/search-modal/SearchModal";

function Home(props) {

    return (
        <div>
            <Topbar navigationStatus={props.navigationStatus}/>
            <HeaderNav handleClick={props.handleClick}
                       navigationStatus={props.navigationStatus}/>
            <ContainerHead/>
            <PicturesLine/>
            <Footer/>
            <SearchModal isOpened={props.isOpened} handleClick={props.handleClick}/>
        </div>
    );
}

export default Home;