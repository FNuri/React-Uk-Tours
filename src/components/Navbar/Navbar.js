import React from 'react'
import logo from "../../logo.svg"
import "./navbar.scss"
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours company"/>
      <ul className="nav-links">
         <li>
            <Link to="/" className="nav-link">
               Home
           </Link>
        </li>

        <li>
            <Link to="/Tours" className="nav-link">
               Tours
           </Link>
        </li>

        <li>
            <Link to="/About" className="nav-link">
               About
           </Link>
        </li>

      
      </ul>
    </nav>
  )
}
