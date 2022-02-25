import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Css/contact.css'
import './Css/Nav.css'
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

function Header () {
    // only returns a block of code
  return (
    <div className='body'>
      <nav>
        <div className="menu">
          <div className="menuoption">
            <ul>
              <li ><Link to="/">Home</Link></li>
              <li ><Link to="./Blog">Blog</Link></li>
              <li ><Link to="./Research">Research</Link></li>
              <li className ="active"><Link to="./Contact">Contact</Link></li>
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
export default function Contact () {
    
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");
  
    function formValidation(){
        if (name === ""||email === ""|| subject === ""|| message === ""){
            alert("Empty fields found. Please fill the form completely.");
        }

        else{
            alert(<>
             <Input size = 'large' type="text" name="name" placeholder='Name' className='name' />
            
                        </>
            );
        }
    }

    return (
        <>
        <Header/>
            <div className='title'>
                <h1>Contact Us</h1>
                <h6>
                    <Link to='/' style={{ textDecoration: 'none' }}> Home </Link>
                    <span className='decorateContact' >
                        /
                        <Link to="./Contact" style={{ textDecoration: 'none', color: "crimson" }}> Contact</Link>
                    </span>
                </h6>
            </div>
            <div className='contact'>
                <div className='left'>
                    <div className='info'>
                        <p>
                            <h2>Get in Touch</h2>
                            Thank you for your visit.<br />
                            <b> ABC Technology Pvt. Ltd.</b><br /><br />
                            <b>Address:</b> <br />
                            New Baneshwor, Kathmandu <br /><br />
                            <b>Email:</b> <br />
                            <a href="mailto:sauravadhikari98@gmail.com" target='_blank' style={{ color: "white" }}>sauravadhikari98@gmail.com</a> <br /> <br />
                            <b>Contact number: </b> <br />
                            +977 9816545429 <br /> <br />

                            Date: {currentDate} <br />
                            Time: {currentTime}

                        </p>
                        

                    </div>

                </div>
                <div className=' right'>
                    <form name="suggestion" >

                        <div className='suggestionComponent'>
                            <div className='column1'>
                                <div className='firstRow'>
                                    <Input size = 'large' type="text" name="name" placeholder='Name' className='name' prefix={<UserOutlined />}
                                       onChange = {(e)=>setName(e.target.value)} />
                                </div>
                                <div className='secondRow'>
                                    <Input type="email" name="email" placeholder='Email' className='mail'
                                        onChange = {(e)=>setEmail(e.target.value)}
                                        />
                                </div>
                                <div className='thirdRow'>
                                    <Input type="text" name="subject" placeholder='Subject' className='subject'
                                     onChange = {(e)=>setSubject(e.target.value)}
                                     />
                                </div>
                                <div className='fourthRow'>
                                    <Input type="radio" name="gender" id="" value='male' checked className='Gender' 
                                    
                                    />Male
                                    <Input type="radio" name="gender" id="" value='female' className='Gender' />Female
                                    <Input type="radio" name="gender" value="third" className='Gender' />Other
                                </div>
                                <div className='fifthRow'>
                                    <button type='submit' value='Send' className='Button' onClick = {() => formValidation()}> Send</button>
                                </div>
                            </div>
                            <div className='column2'>
                                <div className='sixthRow'>
                                    <textarea name="message" id="" cols="30" rows="10" placeholder='Message'
                                    onChange = {(e)=>setMessage(e.target.value)}
                                   
                                    ></textarea>
                                </div>
                            </div>

                        </div>

                    </form>
                </div>
            </div>


        </>
    )
}

