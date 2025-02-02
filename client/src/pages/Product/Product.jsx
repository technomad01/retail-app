import { useState } from 'react';
import { FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import "./product.scss"
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import.meta.env.VITE_API_URL


const Product = () => {
    const { id } = useParams();
    const [selectImage, setSelectImage] = useState("img");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    // console.log(import.meta.env.VITE_API_URL);
    // console.log(data)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    const getImageUrl = (imageData) => {
        return imageData ? `${import.meta.env.VITE_API_UPLOAD_URL}${imageData.attributes.url}` : '';
    };

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    {data?.attributes?.img?.data && (
                        <img
                            src={getImageUrl(data.attributes.img.data)}
                            alt=""
                            onClick={() => setSelectImage('img')}
                        />
                    )}

                    {data?.attributes?.img2?.data && (
                        <img
                            src={getImageUrl(data.attributes.img2.data)}
                            alt=""
                            onClick={() => setSelectImage('img2')}
                        />
                    )}
                </div>
                <div className="mainImg">
                    {data?.attributes[selectImage]?.data && (
                        <img
                            src={getImageUrl(data.attributes[selectImage].data)}
                            alt=""
                        />
                    )}
                </div>
            </div>
            <div className="right">
                <h1>{data?.attributes?.title}</h1>
                <span className='price'>${data?.attributes?.price}</span>
                <p>{data?.attributes?.desc}</p>

                <div className="quantity">
                    <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)} >
                        -
                    </button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)} >+</button>
                </div>
                <button className="add" onClick={() => dispatch(addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                }))}>
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

export default Product;