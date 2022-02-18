import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ContainerUsLine(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/feedback-loop")
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [])

    return (
        <div className="feedback">
            <div className="container feedback-loop">
                <div className="row justify-content-center">
                    {
                        data.map(todo => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 feedback-loop__case" key={todo.id}>
                                    <div className="info">
                                        <div className="info__icon"><FontAwesomeIcon icon={todo.icon}/></div>
                                        <div>
                                            <h5>{todo.title}</h5>
                                            <p>{todo.slogan}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
}

export default ContainerUsLine;