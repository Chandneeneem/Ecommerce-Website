
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Testimonial() {


    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        Infinite: true,
        speed: 150,
        slidesToShow: 3,
        slidesToScroll: 1,
        clickable: true,
        dynamicBullets: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2, 
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1, 
              },
            },
          ],


    };

    return (
        <>




            <hr></hr>
            <div className="container pt-3">
                <div className="d-flex flex-column text-center mb-5">

                    <h1 className="m-0 border bg-info border-solidp-3">Best Warranty Products </h1>
                </div>
                <div className="row pb-3">
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card mb-2 p-3">
                            <img className="card-img-top" src="/homeimg/laptop.jpg" alt="" style={{ height: '300px', objectFit: 'cover' }} />
                            <div className="card-body bg-secondary d-flex align-items-center p-0">
                                <h3 className="card-title text-dark text-truncate m-0">Laptops</h3>
                            </div>
                            <div className="card-footer">
                                India's leading Online Electronic Components Store. Buy now with Maximum Discount on all products including Arduino, IC, Microcontroller, Motor, Robotic etc.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card mb-2 p-3">
                            <img className="card-img-top" src="/homeimg/tablet.jpg" alt="" style={{ height: '300px', objectFit: 'cover' }} />
                            <div className="card-body bg-secondary d-flex align-items-center p-0">

                                <h3 className="card-title text-dark text-truncate m-0">Tablet</h3>
                            </div>
                            <div className="card-footer">
                                India's leading Online Electronic Components Store. Buy now with Maximum Discount on all products including Arduino, IC, Microcontroller, Motor, Robotic etc.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card mb-2 p-3">
                            <img className="card-img-top" src="/homeimg/smartwatch.jpeg" alt="" style={{ height: '300px', objectFit: 'cover' }} />
                            <div className="card-body bg-secondary d-flex align-items-center p-0">

                                <h3 className="card-title text-dark text-truncate m-0">Smart Watch</h3>
                            </div>
                            <div className="card-footer">
                                India's leading Online Electronic Components Store. Buy now with Maximum Discount on all products including Arduino, IC, Microcontroller, Motor, Robotic etc.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card mb-2 p-3">
                            <img className="card-img-top" src="/homeimg/iphone.png" alt="" style={{ height: '400px', objectFit: 'cover' }} />
                            <div className="card-body bg-secondary d-flex align-items-center p-0">

                                <h3 className="card-title text-dark text-truncate m-0">iPhone</h3>
                            </div>
                            <div className="card-footer">
                                India's leading Online Electronic Components Store. Buy now with Maximum Discount on all products including Arduino, IC, Microcontroller, Motor, Robotic etc.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card mb-2 p-3">
                            <img className="card-img-top" src="/homeimg/speaker.jpg" alt="" style={{ height: '400px', objectFit: 'cover' }} />
                            <div className="card-body bg-secondary d-flex align-items-center p-0">
                                <h3 className="card-title text-dark text-truncate m-0">Speaker</h3>
                            </div>
                            <div className="card-footer">
                                India's leading Online Electronic Components Store. Buy now with Maximum Discount on all products including Arduino, IC, Microcontroller, Motor, Robotic etc.
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card mb-2 p-3">
                            <img className="card-img-top" src="/homeimg/headphone.jpeg" alt="" style={{ height: '400px', objectFit: 'cover' }} />
                            <div className="card-body bg-secondary d-flex align-items-center p-0">

                                <h3 className="card-title text-dark text-truncate m-0">HeadPhone</h3>
                            </div>
                            <div className="card-footer">
                                India's leading Online Electronic Components Store. Buy now with Maximum Discount on all products including Arduino, IC, Microcontroller, Motor, Robotic etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*}
            <div className="container-fluid my-5 p-0 py-5" style={{ background: "#f6f6f6" }}>
                <div className="container p-0 py-5">
                    <div className="d-flex flex-column text-center mb-5">
                        <h5 className="text-dark mb-3">Testimonial</h5>
                        <h1 className="m-0">What Our Clients Say</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel" />

                    <Slider {...settings}>



                        <div className="testimonial-item px-3">
                            <div className="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
                                Outstanding service and a fantastic selection of electronics! I found the latest gadgets at unbeatable prices. Definitely my go-to e-commerce store for all things tech.
                            </div>

                            <div className="d-flex align-items-center">
                                <img className="img-thumbnail bg-light rounded-circle" src="/homeimg/client.jpeg" style={{ width: "80px", height: "80px", padding: "12px" }} alt="Image" />
                                <div className="pl-4">
                                    <h6 className="text-dark">Client Name</h6>
                                    <p className="m-0">xyz</p>
                                </div>
                            </div>

                        </div>



                        <div className="testimonial-item px-3">
                            <div className="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
                                Outstanding service and a fantastic selection of electronics! I found the latest gadgets at unbeatable prices. Definitely my go-to e-commerce store for all things tech.
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="img-thumbnail bg-light rounded-circle" src="/homeimg/client.jpeg" style={{ width: "80px", height: "80px", padding: "12px" }} alt="Image" />
                                <div className="pl-4">
                                    <h6 className="text-dark">Client Name</h6>
                                    <p className="m-0">xyz</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-item px-3">
                            <div className="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
                                Outstanding service and a fantastic selection of electronics! I found the latest gadgets at unbeatable prices. Definitely my go-to e-commerce store for all things tech.
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="img-thumbnail bg-light rounded-circle" src="/homeimg/client.jpeg" style={{ width: "80px", height: "80px", padding: "12px" }} alt="Image" />
                                <div className="pl-4">
                                    <h6 className="text-dark">Client Name</h6>
                                    <p className="m-0">xyz</p>
                                </div>
                            </div>
                        </div>


                        <div className="testimonial-item px-3">
                            <div className="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
                                Outstanding service and a fantastic selection of electronics! I found the latest gadgets at unbeatable prices. Definitely my go-to e-commerce store for all things tech.
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="img-thumbnail bg-light rounded-circle" src="/homeimg/client.jpeg" style={{ width: "80px", height: "80px", padding: "12px" }} alt="Image" />
                                <div className="pl-4">
                                    <h6 className="text-dark">Client Name</h6>
                                    <p className="m-0">xyz</p>
                                </div>
                            </div>
                        </div>


                    </Slider>
                </div>
            </div> */}

            <div className="bg-light py-5">
                <Container>

                    <h5 className="text-center text-dark  bg-dark-subtle mb-3">Testimonials</h5>
                    <h1 className="text-center">What Our Customer  Say</h1>
                    <Carousel className="mt-5">
                        <Carousel.Item>
                            <Row className="justify-content-center align-items-center">
                                <Col md={8} className="mb-4 mb-md-0">
                                    <div className="testimonial-text bg-dark-subtle border p-3">
                                        Outstanding service and a fantastic selection of electronics! I found the latest gadgets at unbeatable prices. Definitely my go-to e-commerce store for all things tech.
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="text-center">
                                        <img
                                            src="/img/user.jpg"
                                            alt="Client"
                                            className="img-thumbnail bg-light rounded-circle"
                                            style={{ width: "120px", height: "120px", padding: "12px" }}
                                        />
                                        <h6 className="text-dark mt-3">Client Name</h6>
                                        <p className="text-muted">XYZ </p>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="justify-content-center align-items-center">
                                <Col md={8} className="mb-4 mb-md-0">
                                    <div className="testimonial-text bg-dark-subtle border p-3">
                                        Outstanding service and a fantastic selection of electronics! I found the latest gadgets at unbeatable prices. Definitely my go-to e-commerce store for all things tech.
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="text-center">
                                        <img
                                            src="/img/testimonial-1.jpg"
                                            alt="Client"
                                            className="img-thumbnail bg-light rounded-circle"
                                            style={{ width: "120px", height: "120px", padding: "12px" }}
                                        />
                                        <h6 className="text-dark mt-3">Client Name</h6>
                                        <p className="text-muted">XYZ</p>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="justify-content-center align-items-center">
                                <Col md={8} className="mb-4 mb-md-0">
                                    <div className="testimonial-text bg-dark-subtle border p-3">
                                        Outstanding service and a fantastic selection of electronics! I found the latest gadgets at unbeatable prices. Definitely my go-to e-commerce store for all things tech.
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="text-center">
                                        <img
                                            src="/homeimg/client.jpeg"
                                            alt="Client"
                                            className="img-thumbnail bg-dr rounded-circle"
                                            style={{ width: "120px", height: "120px", padding: "12px" }}
                                        />
                                        <h6 className="text-dark mt-3">Client Name</h6>
                                        <p className="text-muted">XYZ </p>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>


            </div>



        </>
    )
}

export default Testimonial




