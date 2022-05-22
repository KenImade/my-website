import styled from "styled-components";
import { Link } from "react-router-dom";
import BlogLink from "./Utils/BlogLink";

const BlogSection = styled.section`
    background-color: #251D3A;
    padding: 2.5em;
    padding-top: 0.3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`

const BlogHeader = styled.h1`
  color: #9FBAF5;
  font-size: 1.8em;
  text-align: center;
`

const BlogList = styled.ul`
    display: flex;
    flex-direction: column;
`

function Blog(props) {

    return (
        <BlogSection id="blog">
            <BlogHeader>
                Latest Posts
            </BlogHeader>
            <BlogList>
                <BlogLink postTitle="The Temporal Dead Zone in JavaScript" />
                <BlogLink />
                <BlogLink />
            </BlogList>
            <button className="button">
                <Link to="/posts" className="projects--link">View All ➡️</Link>
            </button>
        </BlogSection>
    )
}

export default Blog;