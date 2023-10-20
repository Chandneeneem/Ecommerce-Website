

import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import * as ACTIONTYPES from '../redux/actionTypes'
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

const CartPage = ({ cart }) => {

  const addCarts = useSelector((state) => state.auth.addCarts);
  const [productList, setProductlist] = useState(addCarts);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const removeCart = async (id) => {
    let array = productList.filter(item => item.id !== id);
    dispatch({ type: ACTIONTYPES.ADDCART, payload: array });
    setProductlist(array)
  }

  const getTotalPrice = () => {
    let totalPrice = 0;
    productList.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };



  const handleCashPayment = () => {
    alert('Cash payment selected');
  };

  const handleOnlinePayment = () => {
    alert("pay online")
    navigator('/*')
  };


  console.log('Cart Items:', addCarts);
  return (

    <>
      <Navbar></Navbar>
      <hr></hr>
      <div className="cart-page p-5">
        <h1> Your added Products Here  </h1>
        {productList && productList?.length > 0 ? (
          <div className="row">
            {productList?.map((item) => (
              <Card key={item.id} className="col-md-4" style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" className="card-img-top" src={item.image} alt={item.name} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  <Button variant="dark m-2" onClick={() => removeCart(item.id)}>Remove from Cart</Button>
                </Card.Body>
              </Card>
            ))}

          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <Link to='/home '><strong> back ToHome</strong></Link>

      </div>
      <hr />
      <div className='text-dark p-3'>
        <h1>Your Cart total:${getTotalPrice()}</h1>
      </div>
      <div className="container mt-4 p-3">
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
      <Footer></Footer>

    </>
  );
};

export default CartPage;



