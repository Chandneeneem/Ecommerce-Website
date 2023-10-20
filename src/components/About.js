import React from 'react';
import Navbar from './Nav';
import Footer from './Footer';

const AboutPage = () => {
  return (


    <>
    <Navbar></Navbar>
    <div className="container p-3">
      <div className="row">
        <div className="col-md-6">
          <h2>About Our E-Commerce Store</h2>
          <p>
            Welcome to our e-commerce store! We are dedicated to providing you with the best online shopping experience.
          </p>
          <p>
            Our mission is to offer a wide range of high-quality products at affordable prices. Whether you're looking for clothing, electronics, home decor, or anything in between, we've got you covered.
          </p>
          <p>
            We value customer satisfaction and strive to make your shopping journey seamless and enjoyable. Our team is committed to delivering exceptional customer service and top-notch products.
          </p>
          <p>
            Thank you for choosing our store for your online shopping needs. We look forward to serving you and hope you have a great shopping experience with us!
          </p>
        </div>
        <div className="col-md-6 ">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.ulgIUOumRK4Bvqeddju7mwHaFQ&pid=Api&P=0&h=180"
            alt="About Us"
            className="img-fluid w-100"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Our Values</h3>
          <p>
            <strong>Quality:</strong> We are committed to offering only high-quality products from trusted suppliers.
          </p>
          <p>
            <strong>Affordability:</strong> We believe in providing great value for your money, offering competitive prices.
          </p>
          <p>
            <strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We're here to assist you with any inquiries or issues.
          </p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.Xj90MidM2rngAmDUtJyyYQHaFW&pid=Api&P=0&h=180"
            alt="Electronics Store"
            className="img-fluid w-100"
          />
        </div>
        <div className="col-md-6">
          <h2>About Our Electronics Store</h2>
          <p>
            Welcome to our electronics e-commerce store! We are your one-stop destination for the latest and greatest in electronics and tech gadgets.
          </p>
          <p>
            Our mission is to provide cutting-edge technology products to tech enthusiasts and consumers alike. We offer a wide range of electronic devices, from smartphones and laptops to smart home appliances and wearables.
          </p>
          <p>
            Quality and innovation are at the heart of our business. We partner with leading brands and manufacturers to ensure you get top-notch products that enhance your digital lifestyle.
          </p>
          <p>
            Thank you for choosing our store for your tech needs. We're excited to be part of your tech journey and look forward to serving you with the latest and greatest in the world of electronics.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Why Choose Us?</h3>
          <p>
            <strong>Wide Selection:</strong> We offer a vast selection of electronics products, from the latest smartphones to home entertainment systems.
          </p>
          <p>
            <strong>Quality Assurance:</strong> Our products are carefully curated to ensure the highest quality and performance.
          </p>
          <p>
            <strong>Expert Customer Support:</strong> Our knowledgeable team is here to assist you with any tech-related inquiries and support.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Our Website</h3>
          <p>
            Our website is designed with a user-friendly interface to make your shopping experience easy and enjoyable. You can browse products, read reviews, and make secure purchases with confidence.
          </p>
          <p>
            We also provide informative product descriptions, detailed specifications, and helpful guides to assist you in making informed decisions.
          </p>
          <p>
            Stay updated with the latest tech trends and product releases by visiting our blog and subscribing to our newsletter.
          </p>
        </div>
      </div>
    </div>

    <Footer></Footer>
    </>
  );
};

export default AboutPage;
