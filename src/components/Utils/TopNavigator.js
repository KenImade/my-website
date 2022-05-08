import { useState } from "react";
import {AiOutlineArrowUp} from "react-icons/ai"
import styled from "styled-components";


function TopNavigator() {

    const [visible, setVisible] = useState(true);

    const TopNavigationButton = styled.button`
        display: ${visible ? "block" : "none"};
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        border: none;
        outline: none;
        background-color: #EE3232;
        color: white;
        cursor: pointer;
        padding: 15px;
        border-radius: 50%;
        font-size: 18px;
    `


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if(scrolled > 300) {
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
            <AiOutlineArrowUp />
        </TopNavigationButton>
    )
}

export default TopNavigator;