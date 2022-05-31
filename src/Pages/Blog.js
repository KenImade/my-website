import styled from "styled-components";
import { Link } from "react-router-dom";

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
  padding: 0.6em;
  text-align: center;
`

const BlogList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.4em;
    margin-bottom: 80px;
`

function Blog(props) {

    return (
        <BlogSection id="blog">
            <BlogHeader>
                Latest Posts
            </BlogHeader>
            <BlogList>
                {/* <BlogLink postTitle="The Temporal Dead Zone in JavaScript" postDate="May 29, 2021" postLink="the-temporal-dead-zone"/>
                <BlogLink postTitle="The Temporal Dead Zone in JavaScript" postDate="May 29, 2021" postLink="the-temporal-dead-zone"/>
                <BlogLink postTitle="The Temporal Dead Zone in JavaScript" postDate="May 29, 2021" postLink="the-temporal-dead-zone"/> */}
            </BlogList>
            <button className="button">
                <Link to="/posts" className="projects--link">View All ➡️</Link>
            </button>
        </BlogSection>
    )
}

export default Blog;