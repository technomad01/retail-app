import React from 'react'
import "./footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Clothes</span>
                    <span>Shoes</span>
                    <span>Aceesories</span>
                    <span>Home Items</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className='logo'>
                        <span>NOUVeau</span>
                    </div>
                    <span className='copyright'> © Copyright 2024. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="client/public/payment.png" alt="" />

                </div>
            </div>
        </div>
    )
}

export default Footer