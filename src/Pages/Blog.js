import styled from "styled-components";
import Banner from "../components/Utils/Banner";
import FadeIn from "../components/Utils/FadeIn";

const BlogSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-bottom: 80px;
    margin-top: 80px;
    padding: 30px;

    .post-section {
        margin-bottom: 50px;
        min-width: 400px;

        .post-section-title {
            font-size: 1.8rem;
            text-align: left;
        }
    }

    .post {
        display: flex;
        align-items: left;
        justify-content: left;
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


function Blog() {

    return (
        <>
            <Banner text="Blog" />
            <BlogSection>
                <FadeIn>
                    <div class="post-section">
                        <h2 className="post-section-title">Cloud Computing</h2>
                        <div className="post">
                            <a 
                                href="https://medium.com/@kenimade91/how-to-deploy-a-static-website-to-the-cloud-using-amazon-s3-bucket-and-cloudfront-23db00572199"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h3 className="post-title">Deploying a Static Website to the Cloud</h3>
                                <sub>5 June 2022</sub>
                            </a>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div class="post-section">
                        <h2 className="post-section-title">Programming</h2>
                        <div className="post">
                            <a 
                                href="https://medium.com/@kenimade91/the-reference-trap-da8237528f6b"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h3 className="post-title">The Reference Trap</h3>
                                <sub>6 June 2022</sub>
                            </a>
                        </div>
                    </div>
                </FadeIn>
                {/* <FadeIn>
                    <div class="post-section">
                        <h2 className="post-section-title">Programming</h2>
                        <div className="post">
                            <a href="https://www.google.com">
                                <h3 className="post-title">The Temporal Dead Zone in JavaScript</h3>
                                <sub>1 June 2022</sub>
                            </a>
                        </div>
                        <div className="post">
                            <a href="https://www.google.com">
                                <h3 className="post-title">The Temporal Dead Zone in JavaScript</h3>
                                <sub>1 June 2022</sub>
                            </a>
                        </div>
                        <div className="post">
                            <a href="https://www.google.com">
                                <h3 className="post-title">The Temporal Dead Zone in JavaScript</h3>
                                <sub>1 June 2022</sub>
                            </a>
                        </div>
                    </div>
                </FadeIn> */}
            </BlogSection>
        </>
    )
}

export default Blog;