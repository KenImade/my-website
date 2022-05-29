import styled from "styled-components";
import {AiOutlineMail} from "react-icons/ai";
import {FiLinkedin, FiGithub, FiTwitter} from "react-icons/fi";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #041C32;
    padding: 70px 50px;
    padding-bottom: 20px;

    .website-desc,
    .link {
        width: 300px;
        font-size: 1.2rem;
        color: var(--primary-color);
        text-align: center;
    }

    .website-desc-title, .contact--title {
        color: var(--hover-color);
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 10px;
    }

    .website-desc a {
        color: var(--hover-color);
    }

    .contact--list {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }

    .contact--item {
        text-decoration: none;
        color: var(--primary-color);
    }

    .contact--item:hover {
        color: var(--hover-color);
    }

    @media(max-width: 780px) {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

`


function Footer() {

    return(
        <StyledFooter>
            <div className="website-desc">
                <h3 className="website-desc-title">About this Site</h3>
                I built this website using the React Library. 
                It is hosted on a Netlify server. The source code can
                be found <a className="link" href="https://github.com/KenImade/my-website">here</a>.
            </div>

            <div className="contact" id="contact">
                <h3 className="contact--title">Contact Me</h3>
                <div className="contact--list">
                    <a href="mailto:kenimade91@gmail.com" className="contact--item" target="_blank" rel="noreferrer noopener"><AiOutlineMail size="30px" /></a>
                    <a href="https://www.linkedin.com/in/kenneth-imade/" className="contact--item" target="_blank" rel="noreferrer noopener"><FiLinkedin size="30px" /></a>
                    <a href="https://github.com/kenimade" className="contact--item" target="_blank" rel="noreferrer noopener"><FiGithub size="30px"/></a>
                    <a href="https://twitter.com/kenneth1made" className="contact--item" target="_blank" rel="noreferrer noopener"><FiTwitter size="30px"/></a>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;