import React from 'react'
import { Route} from 'react-router'

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
      <NavLink to="/" style={linkStyles}>Home</NavLink>
      <NavLink to="/articlelist" style={linkStyles} >Articles</NavLink>
      <NavLink to="/comments" style={linkStyles} >Comments</NavLink>

    </nav>
  )
}
export default NavBar