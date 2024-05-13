import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./cart.scss";

const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1135531/pexels-photo-1135531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Shirt Dress",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque exercitationem commodi suscipit. Tempore quaerat sequi nemo repellat atque ipsam nam quas accusamus quisquam distinctio debitis omnis dicta, deserunt delectus.",
        isNew: true,
        oldPrice: 30,
        price: 20,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/3094472/pexels-photo-3094472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Lace Blouse",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque exercitationem commodi suscipit. Tempore quaerat sequi nemo repellat atque ipsam nam quas accusamus quisquam distinctio debitis omnis dicta, deserunt delectus.",
        isNew: true,
        oldPrice: 20,
        price: 15,
    },
]
const Cart = () => {
    return (
        <div className="cart">
            <h1>Items in your cart </h1>
            {data.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 X ${item.price}</div>

                    </div>
                    <DeleteIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
    )
}

export default Cart