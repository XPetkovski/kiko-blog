import { useState, useEffect } from "react"; //useEffect hook
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    //let name = 'Kiko'
    //const [name, setName] = useState('Kiko');
    const [name, setName] = useState('MISKO');
    const [age, setAge] = useState(21);



    /*const handleDelete = (id) =>
    {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    } *///function as prop

    const handleClick = () => {
        // name = 'okiK';
        // console.log(name);
        setName('okiK');
        setAge(22);
    }

    const handleClickAgain = (name) => {
        console.log('Hello, ' + name);
    }

    const {data: blogs, isPending, Error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { Error && <div>{Error}</div>}
            {isPending && <div>Loading...</div> }
           {/* <h2>Home Page</h2>
            <p>{name} is {age} years old!</p>*/}
            {blogs && <BlogList blogs = {blogs} title="All Blogs: "/>}
            {/*<BlogList blogs = {blogs.filter(blog => blog.author === 'pisatel')} title="All Blogs: " />
            <button onClick={handleClick}>Click me!</button>
            <button onClick={() => handleClickAgain('Kiko')}>Click Me Again!</button>
            <button onClick={() => setName('BORIS')}>change name</button>
            <p>{name}</p>*/}
        </div>
    );
}

export default Home;