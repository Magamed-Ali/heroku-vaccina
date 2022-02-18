import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ContainerSection() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/section-block")
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [])

    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    {
                        data.map(todo => {
                        return (
                        <div className="col-lg-3 col-md-6 col-sm-12 aside" key={todo.id}>
                            <div className="aside__block" >
                                <div className="aside__block-icon"><FontAwesomeIcon icon={todo.icon}/></div>
                                <h5><a href={todo.titleLink}>{todo.title}</a></h5>
                                <p>{todo.mainText}</p>
                                <div className="aside__block-link">
                                    <a href="/" className="pop-up-text">{todo.poUpText}</a>
                                    <span><FontAwesomeIcon icon={todo.iconArrowRight}/></span></div>
                            </div>
                        </div>
                        )})
                    }
                </div>
                <div/>
            </div>
        </div>
    );
}

export default ContainerSection;