import React from 'react'
import Card from '../Cards/Cards'
import './list.scss'
import { useFetch } from '../../hooks/useFetch'

const List = ({ subCat, maxPrice, sort, catId }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filter][categories][id]=${catId}${subCat.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&[sort]=price:${sort}`)

    return (
        <div className='list'>
            {loading
                ? "loading"
                : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
    )
}

export default List;
