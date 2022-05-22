import styled from "styled-components";
import {BsAsterisk} from "react-icons/bs";

const StyledBlogLink = styled.div`
    display: flex;
    gap: 2rem;
    padding: 0.6rem;
`
const StyledPostTitle = styled.div`
    color: orange;
`

function BlogLink({postTitle}) {
    return (
        <StyledBlogLink>
            <BsAsterisk color="orange" />
            <StyledPostTitle>{postTitle}</StyledPostTitle>
        </StyledBlogLink>
    )
}

export default BlogLink;