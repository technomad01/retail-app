import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import List from '../../components/List/List.jsx'
import { useFetch } from '../../hooks/useFetch';
import "./products.scss";

const Products = () => {

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    const [selectedSubCat, setSelectedSubCat] = useState([]);

    const { data, } = useFetch(`/sub-categories?[filter][categories][id][$eq]=${catId}`)

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCat(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter((item) => item !== value));
    }
    // console.log(selectedSubCat)
    // console.log(data)
    return (
        <div className='products'>
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    {data?.map(item => (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
                            <label htmlFor="1">{item.attributes.title} </label>
                        </div>
                    ))}

                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>10</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input
                            type="radio"
                            id="asc"
                            value="acs"
                            name="price"
                            onChange={(e) => setSort('asc')}
                        />
                        <label htmlFor="asc">Price(Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input
                            type="radio"
                            id="desc"
                            value="desc"
                            name="price"
                            onChange={(e) => setSort("asc")}/>
                        <label htmlFor="desc">Price(Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="catImg" src="https://images.pexels.com/photos/242829/pexels-photo-242829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCat={selectedSubCat} />
            </div>
        </div>
    )
}

export default Products