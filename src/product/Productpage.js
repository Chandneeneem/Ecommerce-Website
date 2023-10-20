//http://localhost:8081/api/getProducts 
import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row } from 'react-bootstrap';
import { AiOutlineLike } from 'react-icons/ai'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


import * as ACTIONTYPES from '../redux/actionTypes'

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const addCarts = useSelector((state) => state.auth.addCarts);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);



  useEffect(() => {
    fetch('http://localhost:8081/api/getProducts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Verify the data structure here
        if (data && Array.isArray(data.data)) {
          setProducts(data.data); // Access the array within the 'data' property
        } else {
          console.error('API response does not contain an array of products:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...addCarts, product];
    setCart(updatedCart);
    console.log(updatedCart);
    dispatch({ type: ACTIONTYPES.ADDCART, payload: updatedCart });
    console.log(`Added to cart: ${product.name}`);
  };

  const handleLikeProduct = (product) => {
    console.log('Liked product:', product);
  };

  return (
    <>

      <Container>
        <hr></hr>
        <div className="d-flex flex-column text-center mb-3">
          <h1 className="m-0  border bg-dark text-white border-solidp-3">Our Products </h1>
        </div>
        <Row>

          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <Card key={product.id} className='col-md-4' style={{ width: '18rem', margin: '10px' }}>
                {/*<Card.Img variant="top" src={product.image} alt={product.name} />*/}
                <Link to={`/products/${product.id}`}> <Card.Img variant="top" src={product.image} alt={product.name} />  </Link>
                <Card.Body>
                  <Card.Title>{product.name ? product.name.slice(0, 30) : ""}</Card.Title>
                  <Card.Text>{product.description ? product.description.slice(0, 60) : ""}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button className='mb' variant="dark m-2 " onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                  <Button variant="dark" onClick={() => handleLikeProduct(product)}>
                    <AiOutlineLike></AiOutlineLike>
                  </Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No products available</p>
          )}
        </Row>
      </Container>


    </>
  );
};

export default ProductPage;
