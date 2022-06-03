import { useState } from "react";
import {AiOutlineArrowUp} from "react-icons/ai"
import styled from "styled-components";


function TopNavigator() {

    const [visible, setVisible] = useState(true);

    const TopNavigationButton = styled.button`
        display: ${visible ? "flex" : "none"};
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 20px;
        height: 40px;
        width: 40px;
        right: 20px;
        z-index: 99;
        border: none;
        outline: none;
        background-color: var(--hover-color);
        color: white;
        cursor: pointer;
        padding: 15px;
        font-size: 18px;

        :hover {
            background-color: var(--headers-color);
        }
    `


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if(scrolled > 500) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <TopNavigationButton onClick={scrollToTop}>
            <AiOutlineArrowUp size="40px" />
        </TopNavigationButton>
    )
}

export default TopNavigator;