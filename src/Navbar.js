import React from 'react'
import './Css/Nav.css'
import {Link} from "react-router-dom";
export default function Header () {
  return (
    <div className='body'>
      <nav>
        <div className="menu">
          <div className="menuoption">
            <ul>
              <li className ="Home"><Link to="/">Home</Link></li>
              <li className ="Blog" ><Link to="./Blog">Blog</Link></li>
              <li className ="Research"><Link to="./Research">Research</Link></li>
              <li className ="Contact"><Link to="./Contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="navtitle">
        ABC<span className = "subtitle">Tech</span>.
        </div>
      </nav>
    </div>
  )
}
