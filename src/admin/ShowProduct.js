


import React, { useState, useEffect } from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import AdminNav from './AdminNav';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';
function ShowProducts() {
  const [products, setProducts] = useState([]);
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

  return (
    <>

      <div class="p-3 mb-2 bg-black text-white">Welcom to admin Pannel</div>
      <div class="row">
        <div class="col-4">
          <AdminNav></AdminNav>
        </div>


        <div class="col-8">
          <div>
            <ScrollToTopButton></ScrollToTopButton>

            <h2>Product List</h2>

          </div>
          <div className="product-list">
            <div className='row'>
              {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <Card key={product.id} className='col-md-4' style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                    <Card.Body>
                      <Card.Title>{product.name ? product.name.slice(0, 30) : ""}</Card.Title>
                      <Card.Text>{product.description ? product.description.slice(0, 60) : ""}</Card.Text>
                      <Card.Text>Price: ${product.price}</Card.Text>
                      <Button variant="dark m-2" >
                        Add to Cart
                      </Button>
                      <Button variant="dark" >
                        Like
                      </Button>
                    </Card.Body>
                  </Card>


                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          </div>
          <h2>Products show in table from </h2>
          <table className="table table-striped">

            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
}

export default ShowProducts;
