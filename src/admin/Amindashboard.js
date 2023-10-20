import React from 'react'
import AdminNav from './AdminNav'
import { Nav, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';



const Amindashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [login, setLogin] = useState(0);

    useEffect(() => {

        //http://localhost:8081/api/getUserName
        // Fetch total users
        axios.get('http://localhost:8081/api/getTotaluser')
            .then((response) => {
                setTotalUsers(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching total users:', error);
            });


        // Fetch total products
        axios.get('http://localhost:8081/api/getTotalproduct')
            .then((response) => {
                setTotalProducts(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching total products:', error);
            });

        axios.get('http://localhost:8081/api/getLogin')
            .then((response) => {
                setLogin(response.data.data);
                console.log(response.data.data)
            })
            .catch((error) => {
                console.error('Error fetching total users:', error);
            });



    }, []);


    return (
        <div>


            <div class="p-3 mb-2 bg-black text-white">Welcom to admin Pannel</div>

            <>


                <div class="row">

                    <div class="col-4">
                        <AdminNav></AdminNav>
                    </div>
                    <div class="col-8">

                        <h1>Welcome to Your E-commerce Dashboard</h1>
                        <p>
                            Here, you can manage and monitor various aspects of your e-commerce website.
                            Use the dashboard to gain insights into your store's performance and make data-driven decisions to grow your business.
                        </p>

                        <Container>
                            <h1>Dashboard</h1>
                            <Row>
                                <Col md={3}>
                                    <div className="dashboard-card">
                                        <h2>Total Login Users</h2>
                                        <p>{totalUsers}</p>
                                        <Link to='/alluser'>Veiw all user</Link>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="dashboard-card">
                                        <h2>Total Products</h2>
                                        <p>{totalProducts}</p>
                                        <Link to='/showadminp'>Veiw all Products </Link>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="dashboard-card">
                                        <h2>Delete Products</h2>
                                        <Link to='/delprod'><Button variant="danger">Delete</Button></Link>

                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="dashboard-card">
                                        <h2>Login User know</h2>
                                        <p>{login}</p>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div>
                            <p className='p-4 border border-black rounded mt-3'>
                                E-commerce websites have revolutionized the way we shop and do business.
                                With an e-commerce platform, consumers enjoy the convenience of shopping from the comfort of their homes
                                or on the go, while businesses can tap into a global market and reduce the overhead costs associated with
                                physical stores. Online shopping offers a vast array of products, from everyday essentials to unique and niche items,
                                available at the click of a button. Moreover, it provides personalized shopping experiences, with tailored product
                                recommendations and secure payment options. E-commerce platforms enable businesses to track customer behavior and preferences,
                                helping them optimize their offerings and marketing strategies. In the fast-paced world of today, e-commerce websites are the
                                gateway to efficient and accessible shopping experiences, making life easier for consumers and businesses alike.
                            </p>

                        </div>

                        <h2 >Top Selling Products</h2>
                        <div className="top-products">

                            <div className="product">
                                <p>Product Name: Smartphone X</p>

                            </div>
                            <div className="product">
                                <p>Product Name: Laptop Pro</p>

                            </div>

                        </div>
                        <h2>Quick Overview</h2>
                        <ul className="overview-cards">
                            <li className="card">
                                <h3>Total Sales</h3>
                                <p>$25,000</p>
                            </li>
                            <li className="card">
                                <h3>Orders</h3>
                                <p>20</p>
                            </li>
                            <li className="card">
                                <h3>Revenue</h3>
                                <p>$10,000</p>
                            </li>
                            <li className="card">
                                <h3>Products</h3>
                                <p>100</p>
                            </li>
                        </ul>
                        {/* Add more order entries as needed */}


                    </div>
                </div>
            </>

        </div>

    )
}

export default Amindashboard
