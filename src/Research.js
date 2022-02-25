import React from 'react'
import'./Css/Research.css'
import './Css/Nav.css'
import {Link} from "react-router-dom";
function Header () {
  return (
    <div className='body'>
      <nav>
        <div className="menu">
          <div className="menuoption">
            <ul>
              <li ><Link to="/">Home</Link></li>
              <li ><Link to="./Blog">Blog</Link></li>
              <li className ="active"><Link to="./Research">Research</Link></li>
              <li ><Link to="./Contact">Contact</Link></li>
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
export default function Research() {
    return (
        <>
        <Header/>
        <div style = {{padding: '150px', marginLeft: "250px", fontSize:"40px",marginTop: "50px"}}>
            This is a research page.
        </div>
        </>
    )
}
