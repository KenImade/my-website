import "./Contact.css"

function Contact() {

    return (
        <section className="contact" id="contact">
            <h3 className="contact--title">What's next...? 🤔</h3>
            <h1>Get In Touch</h1>
            <div className="contact--list">
                <address><a href="mailto:kenimade91@gmail.com" className="contact--item" target="_blank" rel="noreferrer noopener">Email</a></address>
                <address><a href="https://www.linkedin.com/in/kenneth-imade/" className="contact--item" target="_blank" rel="noreferrer noopener">LinkedIn</a></address>
                <address><a href="https://github.com/kenimade" className="contact--item" target="_blank" rel="noreferrer noopener">GitHub</a></address>
            </div>
        </section>
    )
}

export default Contact;