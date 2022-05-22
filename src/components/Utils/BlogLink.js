import styled from "styled-components";
import {BsAsterisk} from "react-icons/bs";
import { Link } from "react-router-dom";

const StyledBlogLink = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0.6rem;

    .post--link {
        text-decoration: none;
    }
`
const StyledPostTitle = styled.div`
    color:  rgba(159, 186, 245, 0.50);
    font-size: 1.2em;

    &:hover {
        cursor: pointer;
    }
`
const StyledDate = styled.span`
    color: rgba(159, 186, 245, 0.50);
    font-size: .875rem;
    font-style: italic;
    margin-left: 5px;
`


function BlogLink({postTitle, postLink, postDate}) {

    return (
        <StyledBlogLink>
                <BsAsterisk color="orange" />
                <Link
                    className="post--link"
                    to={`/posts/${postLink}`}
                >
                    <StyledPostTitle>
                        {postTitle}
                        <StyledDate>{postDate}</StyledDate>
                    </StyledPostTitle>
                </Link>
        </StyledBlogLink>
    )
}

export default BlogLink;