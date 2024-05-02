import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./contact.scss"
const Contact = () => {
    return (
        <div className='contact'>
            <div className="wrapper">
                <div className="mail">
                    <input type="text" placeholder="Enter your e-mail" />
                    <button>Get in touch</button>
                </div>
                <div className="icons">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                    <LinkedInIcon />
                </div>
            </div>
        </div>
    )
}

export default Contact