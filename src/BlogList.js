//props

import {Link} from "react-router-dom";

const BlogList = ({blogs, title}) => { /*handleDelete*/
    // const blogs = props.blogs;
    // const title = props.title; pristap kon props
    //console.log(props,blogs);

    return (
        <div className="blog-list">
            <h3>{ title }</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{ blog.title }</h3>
                        <p>written by: {blog.author}</p>
                        <p>important quote: {blog.body}</p>
                    </Link>

                    {/*<button onClick={() => handleDelete(blog.id)}>delete blog</button>*/}
                </div>
            ))}
        </div>
    );
}

export default BlogList;