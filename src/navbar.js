import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>Kiko-blog</h1>
            <div className="Links">
                <Link to="/">Home </Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;