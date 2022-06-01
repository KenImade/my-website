import styled from "styled-components";
import Banner from "../components/Utils/Banner";
// import StyledSection from "../components/Utils/StyledSection";

const BlogSection = styled.section`
    ${'' /* background-color: #251D3A; */}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-bottom: 80px;
    margin-top: 80px;
    padding: 30px;

    .post-section {
        .post-section-title {
            font-size: 1.8rem;
        }
    }

    .post {
        display: flex;
        align-items: center;
        gap: 1.1rem;
        margin: 20px 0px;

        .post-title {
            font-size: 1.2rem;
            color: var(--secondary-color);
            transition: all 0.8s;
        }

        .post-title:hover {
            color: var(--hover-color);
            font-size: 1.4rem;
        }
        
        sub {
            color: var(--secondary-color);
        }
    }

    @media(max-width: 780px) {
        .post-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .post-section-title {
                text-align: center;
            }
            
        }

        .post {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0;

            a {
                text-align: center;
            }
            h3 {
                text-align: center;
            }
           
        }
    }
`


function Blog(props) {

    return (
        <>
            <Banner text="Blog" />
            <BlogSection>
                <div class="post-section">
                    <h2 className="post-section-title">Programming</h2>
                    <div className="post">
                        <a href="https://www.google.com">
                            <h3 className="post-title">The Temporal Dead Zone in JavaScript</h3>
                            <sub>1 June 2022</sub>
                        </a>
                    </div>
                </div>
            </BlogSection>
        </>
    )
}

export default Blog;