import React from 'react'
import './Css/footer.css'
import { Link } from 'react-router-dom'
export default function Footer () {
    return (
        <div>
            <hr />
            <footer>
                <div class="footer">
                    <div className = 'icon'>
                        <a href="https://www.instagram.com/adhikari5278/" target='_blank'><img src="./Image/insta.png" alt="Insta" /></a>
                        <a href="https://sauravadhikari98@gmail.com/" target='_blank'><img src="./Image/mail.png" alt="Mail" /></a>
                        <a href="https://www.facebook.com/saurav.adhikari.969/" target='_blank'><img src="./Image/facebook.png" alt="FaceBook" /></a>
                        <a href="https://accounts.snapchat.com/accounts/welcome"><img src="./Image/snapchat.png" alt="SnapChat" /></a>
                        <a href="https://www.twitter.com/" target="_blank"> <img src="./Image/twitter.png" alt="Twitter" /></a>
                    </div>
                </div>
                <div class="copyright">
                    Copyright &#169;2021 All rights reserved | This template is made with by Saurabh Adhikari
                </div>
            </footer>
        </div>
    )
}
