import React from 'react'
import './navbar.styles.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navlinks">
          <Link to={'/'} className="navlink">
            Home
          </Link>
          <Link to={'/create'} className="navlink">
            Create
          </Link>
          <Link to={'/auth'} className="navlink">
            SignIn/Up
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
