import "./Contact.css"

function Contact() {

    return (
        <section className="contact" id="contact">
            <h3 className="contact--title">What's next...? 🤔</h3>
            <h1>Get In Touch</h1>
            <div className="contact--list">
                <a href="#" className="contact--item">Email</a>
                <a href="https://www.linkedin.com/in/kenneth-imade/" className="contact--item">LinkedIn</a>
                <a href="https://github.com/kenimade" className="contact--item">GitHub</a>
                <a href="#" className="contact--item">StackOverflow</a>
            </div>
        </section>
    )
}

export default Contact;