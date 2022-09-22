import { useState, useEffect } from "react";
import axios from "axios";
import "./Blog.css";
import BlogCard from "./components/BlogCard";


const Blog = () => {

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
      axios.get(mediumUrl)
            .then((data) => {
                // console.log(data.data.items)
                setBlogPosts(data.data.items)
            })
    }, [])
    

    const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kenimade91";
    
    return (
        <section className="blog">
            <h1>blog</h1>
            <div className="blog-list">
                {
                    blogPosts.map((item, index) => {
                        return <BlogCard blog={item} key={index} />
                    })
                }
            </div>
        </section>
    )
}

export default Blog