import { useState } from "react";
import {BiUpArrow} from "react-icons/bi"
import styled from "styled-components";


function TopNavigator() {

    const [visible, setVisible] = useState(true);

    const TopNavigationButton = styled.div`
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
        border-radius: 5px;
        background-color: var(--hover-color);
        color: white;
        cursor: pointer;
        font-size: 18px;
        opacity: 0.5;

        :hover {
            background-color: var(--headers-color);
            opacity: 1;
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
            <BiUpArrow size="30px" />
        </TopNavigationButton>
    )
}

export default TopNavigator;