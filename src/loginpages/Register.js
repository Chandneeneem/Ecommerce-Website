
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({}); // To store validation errors

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form fields
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    try {
      const response = await fetch('http://localhost:8081/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Registration was successful
      //alert("Registerd succesfully")
      //navigate('/login');

      toast.success('Registered successfully!', { autoClose: 5000 });
      setTimeout(() => {
        navigate('/login');
      }, 3000);


    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <>

      <div className="registration-page text-white text-bg-info p-3 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1 >Register page</h1>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='name'><strong>Name</strong></label>
                  <input type='text' placeholder='Name' name='name' className='form-control rounded-0' onChange={handleChange} />
                  {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='email'><strong>Email</strong></label>
                  <input type='email' placeholder='Email' name='email' className='form-control rounded-0' onChange={handleChange} />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='password'><strong>Password</strong></label>
                  <input type='password' placeholder='password' name='password' className='form-control rounded-0' onChange={handleChange} />
                  {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>
                <button type='submit' className='btn btn-success bg-dark w-100 rounded-0'><strong>Sign up</strong></button>
              
                <Link to='/login' className='btn btn-success border w-100 bg-dark rounded-0 mt-2'>Login</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </>

  );
}

export default Register;

