import React from 'react'
import { Nav } from 'react-bootstrap'
import ProductList from './ProductList'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import Testimonial from '../components/Testinomial'
import ScrollToTopButton from '../components/ScrollToTopButton'
const Producthome = () => {
  return (
    <div>

      <Navbar></Navbar>
      <ProductList></ProductList>
      <Testimonial></Testimonial>
      <Footer></Footer>
      <ScrollToTopButton></ScrollToTopButton>

    </div>
  )
}

export default Producthome
