import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";

function ContainerLine() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/container-line')
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [])



    return (
        <div className="container">
            <div className="row contact-details">
                {
                    data.map(todo => {
                        return (
                            <div className="col-lg-4 contact-details__address-line" key={todo.id}>
                                <NavLink to={`${todo.to}`}><FontAwesomeIcon icon={todo.icon}/></NavLink>
                                <div>
                                    <p>{todo.textBefore}</p>
                                    <p>{todo.textAfter}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ContainerLine;