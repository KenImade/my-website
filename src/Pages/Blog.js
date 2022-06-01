import styled from "styled-components";
import Banner from "../components/Utils/Banner";

const BlogSection = styled.section`
    ${'' /* background-color: #251D3A;
    padding: 2.5em;
    padding-top: 0.3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center; */}
`


function Blog(props) {

    return (
        <>
            <Banner text="Blog" />
            <BlogSection>
            
            </BlogSection>
        </>
    )
}

export default Blog;