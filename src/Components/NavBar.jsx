import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from React Router

function NavBar() {
    const linkStyles = {
        textAlign: "center",
        marginLeft:"10px",
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        fontSize: "30px",
        padding: "10px 20px",
      }
    return (
        <nav>
            <Link to="/" style={linkStyles}>Home</Link>
            <Link to="/articlelist" style={linkStyles} >Articles</Link>
            <Link to="/comments" style={linkStyles} >Comments</Link>
            {/* Add other links here using the Link component */}
        </nav>
    );
}

export default NavBar;
