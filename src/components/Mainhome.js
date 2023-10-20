/*
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Nav from './Nav'
import ProductList from '../product/ProductList'
import Footer from './Footer'

import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Mainhome = () => {
    return (
        <>
            {/*}
        <div>
      <Nav></Nav>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="card text-bg-dark">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="./img/shop1.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block card-img-overlay">
                                <h1 className="card-title">New Latest Product Here </h1>
                                <p className="card-text">Some representative placeholder content for the third slide.</p>
                                <Link to='/reg' className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Shop_Know{<AiOutlineArrowRight/>}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card text-bg-dark">
                        <div className="carousel-item card  " data-bs-interval="2000">
                            <img src="./img/shop.jpeg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block card-img-overlay">
                                <h1 className="card-title">New Latest Product Here </h1>
                                <p className="card-text">Some representative placeholder content for the third slide.</p>
                                <Link to='/reg' className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Shop_Know{<AiOutlineArrowRight/>}</Link>
                            </div>
                        </div>
                    </div>


                    <div className="card text-bg-dark">
                        <div className="carousel-item card  " data-bs-interval="2000">
                            <img src="./img/shop2.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block card-img-overlay">
                                <h1 className="card-title">New Latest Product Here </h1>
                                <p className="card-text">Some representative placeholder content for the third slide.</p>
                                <Link to='/reg' className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Shop_Know{<AiOutlineArrowRight/>}</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
      </div>
      <ProductList></ProductList>
      <Footer></Footer>

      
    </>
  ///}


            <div className="bg-light py-5">
                <Container>
                    <h5 className="text-center text-dark mb-3">Testimonials</h5>
                    <h1 className="text-center">What Our Clients Say</h1>
                    <Carousel className="mt-5">
                        <Carousel.Item>
                            <Row className="justify-content-center align-items-center">
                                <Col md={8} className="mb-4 mb-md-0">
                                    <div className="testimonial-text bg-light border p-3">
                                        Outstanding service and a fantastic selection of electronics! I found the latest gadgets at unbeatable prices. Definitely my go-to e-commerce store for all things tech.
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="text-center">
                                        <img
                                            src="/homeimg/client.jpeg"
                                            alt="Client"
                                            className="img-thumbnail bg-light rounded-circle"
                                            style={{ width: "120px", height: "120px", padding: "12px" }}
                                        />
                                        <h6 className="text-dark mt-3">Client Name</h6>
                                        <p className="text-muted">XYZ Company</p>
                                    </div>
                                </Col>


                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="justify-content-center align-items-center">
                                <Col md={8} className="mb-4 mb-md-0">
                                    <div className="testimonial-text bg-light border p-3">
                                        Outstanding service and a fantastic selection of electronics! I found the latest gadgets at unbeatable prices. Definitely my go-to e-commerce store for all things tech.
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="text-center">
                                        <img
                                            src="/homeimg/client.jpeg"
                                            alt="Client"
                                            className="img-thumbnail bg-light rounded-circle"
                                            style={{ width: "120px", height: "120px", padding: "12px" }}
                                        />
                                        <h6 className="text-dark mt-3">Client Name</h6>
                                        <p className="text-muted">XYZ Company</p>
                                    </div>
                                </Col>


                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="justify-content-center align-items-center">
                                <Col md={8} className="mb-4 mb-md-0">
                                    <div className="testimonial-text bg-light border p-3">
                                        Outstanding service and a fantastic selection of electronics! I found the latest gadgets at unbeatable prices. Definitely my go-to e-commerce store for all things tech.
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="text-center">
                                        <img
                                            src="/homeimg/client.jpeg"
                                            alt="Client"
                                            className="img-thumbnail bg-light rounded-circle"
                                            style={{ width: "120px", height: "120px", padding: "12px" }}
                                        />
                                        <h6 className="text-dark mt-3">Client Name</h6>
                                        <p className="text-muted">XYZ Company</p>
                                    </div>
                                </Col>


                            </Row>
                        </Carousel.Item>

                        {/* Add more Carousel.Items for additional testimonials////}
                    </Carousel>
                </Container>


            </div>


        </>
    )
}

export default Mainhome

*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Mainhome = () => {
  const handleCashPayment = () => {
    // Handle cash payment logic
    // For example, you can display a message that cash payment is selected
    alert('Cash payment selected');
  };

  const handleOnlinePayment = () => {
    // Handle online payment logic
    // For example, you can redirect to an online payment gateway
    window.location.href = 'https://example.com/online-payment'; // Replace with the actual URL
  };

  return (
    <div className="container mt-4">
      <h2>Payment Options</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cash Payment</h5>
              <p className="card-text">Select this option to pay with cash.</p>
              <button className="btn btn-primary" onClick={handleCashPayment}>Pay with Cash</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Online Payment</h5>
              <p className="card-text">Select this option to pay online.</p>
              <button className="btn btn-primary" onClick={handleOnlinePayment}>Pay Online</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainhome;
