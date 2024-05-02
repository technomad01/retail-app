import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./slider.scss"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://aya.eco/cdn/shop/products/silk_white_boho_wedding_mini_slip_dress_by_aya_sacred_wear_1365x2048.jpg?v=1637649975",
        "https://images.pexels.com/photos/896293/pexels-photo-896293.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/985639/pexels-photo-985639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ];


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }


    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider