// import ToText from "../../../utils/ToText"

const BlogCard = ({blog}) => {
    return (
        <article className="blog-card">
            <div className="blog-card-img">
                <img src={blog.thumbnail} alt=""/>
            </div>
            <h3 className="blog-card-title">{blog.title}</h3>
            {/* <p className="blog-card-text">
                {`${ToText(blog.description.substring(700, 1000))}...`}
            </p> */}
            <a
                className="blog-card-link" 
                href={blog.link}
                target="_blank"
                rel="noreferrer"
            >
                Read more
            </a>
        </article>
    )
}

export default BlogCard