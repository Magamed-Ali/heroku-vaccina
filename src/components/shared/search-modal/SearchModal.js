import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SearchModal(props) {
    return (
        <form className={` ${props.isOpened ? 'modal-wrapper' : 'modal-wrapper-none'}`}>
            <div onClick={props.handleClick} className="faTimes">
                <span></span>
                <span></span>
            </div>
            <div className='modal-wrapper__body'>
                <div className='modal-wrapper__close'>
                    <input type="text" placeholder=" Search..."/><FontAwesomeIcon icon="search"/>
                </div>
            </div>
        </form>
    );
}

export default SearchModal