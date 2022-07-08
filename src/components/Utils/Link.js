import styled from "styled-components";


const StyledLink = styled.a`
    width: auto;
    text-align: center;
    background-color: var(--hover-color);
    color: var(--primary-color);
    padding: 0.5rem;
    border-radius: 5px;

    :hover{
        background-color: var(--headers-color);
    }

    :visited {
        color: var(--primary-color);
    }
`;


function Link({text, link}) {

    return (
        <StyledLink href={link} target="_blank">
            {text}
        </StyledLink>
    )
}

export default Link;