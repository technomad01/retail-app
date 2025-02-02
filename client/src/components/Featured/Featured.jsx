import React from 'react'
import Cards from "../Cards/Cards";
import "./featured.scss"
import { useFetch } from '../../hooks/useFetch';


const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`
    );

    // console.log(data)
    return (
        <div className='featured'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam quaerat quia officia nostrum architecto rem natus eveniet distinctio ea, veniam placeat. Saepe ducimus est maxime temporibus. At, maiores ipsa!</p>
            </div>
            <div className='bottom'>
                {error ? "Something went wrong!"
                    : loading
                        ? "loading"
                        : data?.map((item) => <Cards item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts;