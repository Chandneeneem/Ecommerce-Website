//http://localhost:8081/api/getProducts 

import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineLike } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import * as ACTIONTYPES from '../redux/actionTypes';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const addCarts = useSelector((state) => state.auth.addCarts);
  //const likedProducts = useSelector((state) => state.auth.likedProducts);
  //const [like, setLike] = useState([]);
  //const [cart, setCart] = useState([]);
  //const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    let apiUrl = selectedCategory === 0 ? 'http://localhost:8081/api/getProducts' : `http://localhost:8081/api/getProductscat/${selectedCategory}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          //('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Verify the data structure here
        if (data && Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          console.error('API response does not contain an array of products:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [selectedCategory]);


  const handleAddToCart = (product) => {
    // Check if addCarts is an array, and if not, initialize it as an empty array.
    const updatedCart = Array.isArray(addCarts) ? [...addCarts] : [];
    updatedCart.push(product);
    dispatch({ type: ACTIONTYPES.ADDCART, payload: updatedCart });
    console.log(`Added to cart: ${product.name}`);
  };

  const handleLikeProduct = (product) => {
    console.log('Liked product:', product);
  };

  return (
    <Container>
      <Row>
        <div className="category-filter mt-4">
          <Button variant="dark me-2 mb-2" onClick={() => setSelectedCategory(0)}>
            All
          </Button>
          <Button variant="dark me-2 mb-2" onClick={() => setSelectedCategory(1)}>
            Laptops
          </Button>
          <Button variant="dark me-2 mb-2" onClick={() => setSelectedCategory(2)}>
            Phones
          </Button>
          <Button variant="dark me-2 mb-2" onClick={() => setSelectedCategory(3)}>
            Watchs
          </Button>
          <Button variant="dark me-2 mb-2" onClick={() => setSelectedCategory(4)}>
            HeadPhone
          </Button>

        </div>
      </Row>
      <Row>
        <hr></hr>
        <h1 class="d-flex justify-content-center align-items-center"> Our Latest Products</h1>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} className='col-md-4' style={{ width: '18rem', margin: '10px' }}>
              {/*<Card.Img variant="top" src={product.image} alt={product.name} />*/}
              <Link to={`/products/${product.id}`}>
                <Card.Img variant="top" src={product.image} alt={product.name} />
              </Link>
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
  );
};

export default ProductList;

