import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import image from "../../../public/payment.png"
import "./footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>ABOUT US</h1>
                    <span>About Us</span>
                    <span>Partnerships</span>
                    <span>Press</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="item">
                    <h1>CUSTOMER SERVICE</h1>
                    <span>Order Tracking</span>
                    <span>Order Returns</span>
                    <span>Refunds</span>
                    <span>FAQs</span>
                    <span>Delivery</span>
                    <span>Payment Methods</span>
                    <span>Returns</span>
                    <span>Contact Us</span>

                </div>
                <div className="item">
                    <h1>TOP SEARCHES</h1>
                    <span>Womens Clothing</span>
                    <span>Mens Clothing</span>
                    <span>Mens Sneakers</span>
                    <span>Womens Sneakers</span>
                    <span>T-Shirt</span>
                    <span>Makeup</span>
                    <span>Womens Shoes</span>
                </div>
                <div className="item">
                    <h1>TOP BRANDS</h1>
                    <span>Apple</span>
                    <span>Celine</span>
                    <span>GAP</span>
                    <span>Levis</span>
                    <span>Marc Jacobs</span>
                    <span>Nike</span>
                    <span>Ralph Lauren</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className='logo'>
                        <span>NOUVeau</span>
                    </div>
                    <span className='copyright'> © Copyright 2024. All Rights Reserved</span>
                    <div className="icons">
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <YouTubeIcon />
                        <LinkedInIcon />
                    </div>
                </div>
                <div className="right">
                    <img src={image} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Footer