import React from 'react'
import './Css/Home.css'
import Banking from './mobileBanking1.png'
import './Css/Nav.css'
import { Link } from "react-router-dom";
function Header () {
    return (
        <div className='body'>
            <nav>
                <div className="menu">
                    <div className="menuoption">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li ><Link to="./Blog">Blog</Link></li>
                            <li ><Link to="./Research">Research</Link></li>
                            <li ><Link to="./Contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="navtitle">
                    ABC<span className="subtitle">Tech</span>.
                </div>
            </nav>
        </div>
    )
}
export default function Home () {
    return (
        <>
        <Header/>
            <div className='main'>
                <div className='leftSide'>
                    <h3 id='firstH3'>
                        Welcome
                    </h3>
                    <h3 id='secondH3'>
                        to
                    </h3>
                    <h3 id='thirdH3'>
                        ABC
                    </h3>
                    <h3 id='fourthH3'>
                        <span style={{ color: 'crimson' }}>Tech</span>nology<span style={{ color: 'crimson' }}>.</span>
                    </h3>
                    <div className='slogan'>
                        <h3 id='slo_first'>
                            <br />
                            <b>
                                We Make Banking
                            </b>
                        </h3>
                        <h3 id='slo_second'>
                            <b>
                                Channels Easier
                            </b>
                        </h3>
                        <h3 id='slo_third'>
                            <b>
                                For You.
                            </b>
                        </h3>
                    </div>

                </div>
                <div className='rightSide' style={{ backgroundImage: `url(${Banking})` }} >
                </div>

            </div>
        </>
    )
}
