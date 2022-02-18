import React from 'react';
import ContainerSection from "../container-section/ContainerSection";

function ContainerHead() {
    return (
        <div>
            <div className="container-fluid content-menu">
                <div className="content-menu__title">
                    <div>
                        <h6>Markets & Resources</h6>
                        <h1>Find The Best<br/> Doctor Around You</h1>
                    </div>
                    <div className="content-menu__btn">
                        <button className="btn-primary btn">Find Doctor &#10010;</button>
                        <button className="btn-secondary btn">Find Doctor</button>
                    </div>
                </div>
            </div>
            <ContainerSection/>
        </div>
    );
}

export default ContainerHead;