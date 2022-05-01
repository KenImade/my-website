import { Link } from "react-router-dom";



function Footer() {

    return(
        <footer>
            <section className="footer--links">
                <div className="left--footer--links">
                    <Link className="left--footer--link" to="/">Home</Link>
                    <Link className="left--footer--link" to="/blog">Blog</Link>
                    <Link className="left--footer--link" to="/contact">Contact</Link>
                </div>

                <div className="right--footer--links">
                    <a className="right--footer--link" href="https://stackoverflow.com/users/18151855/kenneth-imade">Stackoverflow</a>
                    <a className="right--footer--link" href="https://github.com/kenimade">Github</a>
                </div>
            </section>
            <p className="footer--copyright">Copyright © Kenneth Imade 2022</p>
        </footer>
    )
}

export default Footer;