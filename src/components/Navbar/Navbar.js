import React from 'react'
import logo from "../../logo.svg"
import "./navbar.scss"
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <a style={{marginTop: -10}} href="/"><img src={logo} alt="city tours company"/> </a>
      
      <ul className="nav-links">
      <li>
            <Link to="/Tours" className="nav-link">
               Tours
           </Link>
        </li>
        
         <li>
            <Link to="/Testimonials" className="nav-link">
               Testimonials
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
