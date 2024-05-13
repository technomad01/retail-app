import React, { useState } from 'react';
import { FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import "./product.scss"


const Product = () => {

    const [selectImage, setSelectImage] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const images = [
        "https://images.pexels.com/photos/4611700/pexels-photo-4611700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={(e) => setSelectImage(0)} />

                    <img src={images[1]} alt="" onClick={(e) => setSelectImage(1)} />

                    <img src={images[2]} alt="" onClick={(e) => setSelectImage(2)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectImage]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Brand</h1>
                <span className='name'>Pant Suit</span>
                <span className='price'>$199</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque exercitationem commodi suscipit. Tempore quaerat sequi nemo repellat atque ipsam nam quas accusamus quisquam distinctio debitis omnis dicta, deserunt delectus.</p>
                <div className="quantity">
                    <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)} >-</button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)} >+</button>
                </div>
                <button className="add">
                    <ShoppingCart /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorder />
                        ADD TO WISHLIST
                    </div>
                </div>
                <div className="info">
                    <hr />
                    <span>Details</span>
                    <button>+</button>
                    <hr />
                    <span>Delivery and Returns</span>
                    <button>+</button>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Product