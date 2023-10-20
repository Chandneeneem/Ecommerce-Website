
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';

import * as ACTIONTYPES from '../redux/actionTypes';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Navbar from '../components/Nav';

const ProductView = () => {
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const { id } = useParams();
    const addCarts = useSelector((state) => state.auth.addCarts);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Fetch the product details based on productId
        fetch(`http://localhost:8081/api/getProductById/${id}`)
            .then((response) => {
                if (!response.ok) {
                    // Handle the error here
                }
                return response.json();
            })
            .then((data) => {
                // Verify the data structure here
                setProduct(data.data);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
            });
    }, [id]);

      const handleAddToCart = (product) => {
        const updatedCart = [...addCarts, product];
        setCart(updatedCart);
        dispatch({ type: ACTIONTYPES.ADDCART, payload: updatedCart });
        console.log(`Added to cart: ${product.name}`);
      };

    return (
        <>
            <Navbar></Navbar>

            <Container>
                {product ? (
                    <Row>
                        <Col md={6}>
                            <img src={product.image} alt={product.name} className="img-fluid" />
                        </Col>

                        <Col md={4}>

                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <Button variant="dark m-2" onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </Button>
                            <Link to="/cart">
                                <Button variant="dark">Go to Cart</Button>
                            </Link>
                            <hr></hr>
                            <Link to="/prodhome" className='text-primary m-2'>
                                back to product Page
                            </Link>

                        </Col>

                    </Row>
                ) : (
                    <p>Loading product details...</p>
                )}
            </Container>

        </>
    );
};

export default ProductView;
