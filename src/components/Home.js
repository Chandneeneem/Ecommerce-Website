import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Home1 from './Home1'
import Footer from './Footer'
import ProductPage from '../product/Productpage'
import Testimonial from './Testinomial'
import ScrollToTopButton from './ScrollToTopButton'


const Home = () => {
    return (
        <>

            <Nav></Nav>
            <Home1></Home1>
            
            <ProductPage></ProductPage>
            <Testimonial></Testimonial>

            <Footer></Footer>
            <ScrollToTopButton></ScrollToTopButton>

        </>
    )
}

export default Home
