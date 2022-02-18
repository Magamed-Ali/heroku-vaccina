import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

function ScrollToTop(props) {

    const scroll_up = () => window.scrollTo(0, 0);

    let [isShowBtn, setIsShowBtn] = useState();

    window.onscroll = () => {
        window.scrollY > 500
            ? setIsShowBtn('scroll-top')
            :
            setIsShowBtn('')
    }

    return (
        <div>
            <div id={isShowBtn}  onClick={() => scroll_up()}>
                <FontAwesomeIcon icon="arrow-up"/>
            </div>
        </div>
    );
}

export default ScrollToTop;