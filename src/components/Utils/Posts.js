import styled from "styled-components";
// import BlogLink from "./Utils/BlogLink";


const StyledPosts = styled.div`
  background-color: var(--primary-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5em;

  hr {
      width: 30%;
  }

  .post--title {
      color: red;
  }

  .posts--list {
      margin-top: 30px;
  }
`

function Posts() {

    return (
        <StyledPosts>
            <h1 className="post--title">Posts</h1>
            <hr />
            <div className="posts--list">
                {/* <BlogLink postTitle="The Temporal Dead Zone in JavaScript" postDate="May 29, 2021" postLink="the-temporal-dead-zone"/> */}
            </div>
        </StyledPosts>
    )
}

export default Posts;