import styled from "styled-components";

const StyledBanner = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 2.5rem;
    background-color: var(--hover-color);
    width: 100%;
    margin-top: 85px;
    height: 250px;

    @media(max-width: 780px) {
       height: 180px; 
    }
`

function Banner({text}) {

    return (
        <StyledBanner>
            {text}
        </StyledBanner>
    )
}


export default Banner;