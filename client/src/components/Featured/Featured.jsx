import React, { useEffect, useState } from 'react'
import Cards from "../Cards/Cards";
import axios from "axios";
import.meta.env.VITE_API_URL;
import.meta.env.VITE_API_TOKEN
import "./featured.scss"


const FeaturedProducts = ({ type }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/products?populate=*&[filters] [type] [$eq]=${type}`,
                    {
                        headers: {
                            Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
                        },
                    }
                );

                setData(res.data.data)
                // console.log(res)
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
   
    return (
        <div className='featured'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam quaerat quia officia nostrum architecto rem natus eveniet distinctio ea, veniam placeat. Saepe ducimus est maxime temporibus. At, maiores ipsa!</p>
            </div>
            <div className='bottom'>
                {data && data.length > 0 ? (
                    data.map(item => <Cards item={item} key={item.id} />)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default FeaturedProducts