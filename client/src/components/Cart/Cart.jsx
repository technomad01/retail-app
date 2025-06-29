import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import './cart.scss';
import.meta.env.VITE_API_URL
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest"


const Cart = () => {

    const products = useSelector((state) => state.cart.products)
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => { total += item.quantity * item.price; });
        return total.toFixed(2);
    }

    const stripePromise = loadStripe('pk_live_51PHqOhRuQrwGxtycrJrZvmdOfT8NNC5JatQtUvjiCqP0hJKY5pGbg0d4uUB6CyGwhDdCCWp2V0sSNmRGkLc1u6r700jqZOJpuB');

    const handlePayment = async () => {
        try{
            await stripePromise;
            const stripe = await stripePromise;

            const res = await makeRequest.post("/orders", {
                products,
            })  ;

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })          
        } catch(err){
            console.log('Error during payment:', err)
        }
    }

    return (
        <div className="cart">
            <h1>Items in your cart </h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={import.meta.env.VITE_API_UPLOAD_URL + item.img} alt="" />

                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>

                        <div className="price">{item.quantity} X ${item.price}</div>
                    </div>
                    <DeleteIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        </div>
    );
};

export default Cart;
