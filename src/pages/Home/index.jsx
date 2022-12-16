import React from 'react'
import Space from '../../components/Space'
// sections
import About from '../../sections/About'
import Blogs from '../../sections/Blogs'
import CookingIngredients from '../../sections/CookingIngredients'
import Copyright from '../../sections/Copyright'
import Discount from '../../sections/Discount'
import Footer from '../../sections/Footer'
import Header from '../../sections/Header'
import Newsletter from '../../sections/Newsletter'
import Numbers from '../../sections/Numbers'
import Reviews from '../../sections/Reviews'
import Special from '../../sections/Special'
import StraightFromKitchen from '../../sections/StraightFromKitchen'

const Home = () => {
    return (
        <div>
            <Header />
            <Space>
                <About />
                <Special />
                <StraightFromKitchen />
                <Discount />
                <CookingIngredients />
                <Numbers />
                <Reviews />
                <Blogs />
                <Footer />
                <Newsletter />
                <Copyright />
            </Space>
        </div>
    )
}

export default Home