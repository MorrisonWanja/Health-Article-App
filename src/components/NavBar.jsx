import React from "react"
import {NavLink} from "react-router-dom"

function Navbar () {

    const LinkStyles = {
        color:"green",
        textAlign:"centre",
        fontWeight:"bold",
        fontsize:"26px",
        padding:"15px",
        marginleft:"12px", 
    }

    return (
        <nav>
            <NavLink to="/articlelist" style={linkStyles} >Articles</NavLink>
        </nav>
    )
}