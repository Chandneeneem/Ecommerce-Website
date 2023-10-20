
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>About Us</h4>
            <p><Link to='/about'>Your e-commerce store description goes here.</Link></p>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          
          <div className="col-md-2">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/home" className="text-light">Home</Link>
              </li>
              <li>
                <Link to="/prodhome" className="text-light">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-light">About</Link>
              </li>
              <li>
                <Link to="/profile" className="text-light">Profile</Link>
              </li>
              <li>
                <Link to="/cart" className="text-light">Cart</Link>
              </li>
            </ul>
          </div>
  
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <ul className="unstyled">
              <li>
                <Link to="#" className="text-light" >Facebook</Link>
              </li>
              <li>
                <Link to="#" className="text-light">Twitter</Link>
              </li>
              <li>
                <Link to="#" className="text-light" >Instagram</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

