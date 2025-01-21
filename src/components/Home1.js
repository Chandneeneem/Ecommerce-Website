import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { TbClock24 } from 'react-icons/tb'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'

const Home1 = () => {


    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="./img/bg1.jpg" className="d-block w-100" alt="Background 1" />
                        <div className="carousel-caption d-none d-md-block card-img-overlay">
                            <h1 className="card-title">New Latest Product Here</h1>
                            <p className="card-text">PICK YOUR FAVORITE BRAND</p>
                            <Link to='/prodhome' className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Shop_Know{<AiOutlineArrowRight />}</Link>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                        <img src="./img/bg7.jpg" className="d-block w-100" alt="Background 2" />
                        <div className="carousel-caption d-none d-md-block card-img-overlay">
                            <h1 className="card-title">New Latest Product Here</h1>
                            <p className="card-text">PICK YOUR FAVORITE BRAND</p>
                            <Link to='/prodhome' className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Shop_Know{<AiOutlineArrowRight />}</Link>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                        <img src="./img/bg3.jpg" className="d-block w-100" alt="Background 3" />
                        <div className="carousel-caption d-none d-md-block card-img-overlay">
                            <h1 className="card-title text-dark">New Latest Product Here</h1>
                            <p className="card-text text-dark">PICK YOUR FAVORITE BRAND</p>
                            <Link to='/prodhome' className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Shop_Know{<AiOutlineArrowRight />}</Link>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" ariahidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container-fluid py-5 py-lg-0 feature mt-2 p-2">
                <div className="row py-5 py-lg-0">
                    <div className="col-lg-4 p-0">
                        <div className="feature-item d-flex align-items-center border-right px-5 mb-4 mb-lg-0">
                            <i className="display-3 text-dark mr-4"><TbTruckDelivery></TbTruckDelivery></i>
                            <div className="">
                                <h5 className="mb-3">Fastest Delivery</h5>
                                <p className="m-0">Experience lightning-fast delivery with our express shipping option, ensuring your order reaches your doorstep in record time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="feature-item d-flex align-items-center border-right px-5 mb-4 mb-lg-0">
                            <i className="display-3 text-dark mr-4"><AiOutlineAppstoreAdd></AiOutlineAppstoreAdd></i>
                            <div className="">
                                <h5 className="mb-3">Latest Product</h5>
                                <p className="m-0">Stay ahead in the world of electronics with our latest product lineup, featuring state-of-the-art tech innovations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="feature-item d-flex align-items-center px-5">
                            <i className=" display-3 text-dark mr-4"><TbClock24></TbClock24></i>
                            <div className="">
                                <h5 className="mb-3">24/7 Support</h5>
                                <p className="m-0">Shop at your convenience with our 24/7 e-commerce store, providing access to your favorite products around the clock.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home1
