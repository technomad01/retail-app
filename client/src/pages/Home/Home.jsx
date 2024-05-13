import "./home.scss"
import React from 'react'
import Slider from '../../components/Slider/Slider';
import Featured from '../../components/Featured/Featured';
import Categories from "../../components/Categories/Categories";


const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <Featured type="featured" />
            <Categories />
            <Featured type="trending" />
            
        </div>
    )
}

export default Home