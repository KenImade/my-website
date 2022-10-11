// import ToText from "../../../utils/ToText"

import formatDate from "../../../utils/dateFormatter"

const BlogCard = ({blog}) => {
    console.log(blog)
    return (
        <article className="blog-card">
            <div className="blog-card-img">
                <img src={blog.thumbnail} alt=""/>
            </div>
            <h3 className="blog-card-title">{blog.title}</h3>
            <div className="date">{formatDate(blog.pubDate)}</div>
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