import styled from "styled-components";
import {AiOutlineGithub} from "react-icons/ai";
import {GiNotebook} from "react-icons/gi";
import {GoLinkExternal} from "react-icons/go";

const StyledProjectLinks = styled.div`
display: flex;
padding: 0.5em;
align-items: center;
justify-content: center;
gap: 10px;
`

const StyledProjectLink = styled.button`

    svg {
        width: 30px;
        height: auto;
        color: #4B7BE5;
    }

    svg:hover {
        color: orange;
        cursor: pointer;
    }
`;

const ProjectLinks = ({gitLink, blogLink, webLink}) => {

    return (
        <StyledProjectLinks>
            {gitLink && <StyledProjectLink as="a" href={gitLink}>
                <AiOutlineGithub />
            </StyledProjectLink>}
            {blogLink && <StyledProjectLink as="a" href={blogLink}>
                <GiNotebook />
            </StyledProjectLink>}
            {webLink && <StyledProjectLink as="a" href={webLink}>
                <GoLinkExternal />
            </StyledProjectLink>}
        </StyledProjectLinks>
    )
}

export default ProjectLinks;