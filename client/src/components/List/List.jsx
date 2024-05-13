import React from 'react'
import Card from '../Cards/Cards'
import './list.scss'

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1135531/pexels-photo-1135531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Shirt Dress",
            isNew: true,
            oldPrice: 30,
            price: 20,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/3094472/pexels-photo-3094472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Lace Blouse",
            isNew: true,
            oldPrice: 20,
            price: 15,
        },
        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2017/09/01/21/53/sunglasses-2705642_1280.jpg",
            title: "Sunglasses",
            isNew: true,
            oldPrice: 10,
            price: 5,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Bucket Hat",
            isNew: true,
            oldPrice: 40,
            price: 35,
        },
    ]
    return (
        <div className='list'>
            {data?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List