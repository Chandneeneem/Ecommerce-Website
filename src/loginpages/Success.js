/*
import React from 'react'

const Success = () => {
  return (
    <div>
      <h1>Success</h1>
    </div>
  )
}

export default Success
*/
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Success = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigate();

  const handleLoginAdmin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/adminlogin', {
        email,
        password,
      });
      const { status, authToken } = response.data;
      if (status === true) {
        console.log("token", authToken);
        localStorage.setItem('token', authToken);
        toast.success('Admin login successful', {
          position: 'top-right',
        });
        navigator('/adminh');
      } else {
        toast.error('Admin login failed. Please check your credentials.', {
          position: 'top-right',
        });
      }
    } catch (err) {
      toast.error('Admin login failed. Please check your credentials.', {
        position: 'top-right',
      });
      console.error('Admin login error:', err);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/login', {
        email,
        password,
      });
      const { status, authToken } = response.data;
      if (status === true) {
        console.log("token", authToken);
        localStorage.setItem('token', authToken);
        toast.success('User login successful', {
          position: 'top-right',
        });
        navigator('/home');
      } else {
        toast.error('User login failed. Please check your credentials.', {
          position: 'top-right',
        });
      }
    } catch (err) {
      toast.error('User login failed. Please check your credentials.', {
        position: 'top-right',
      });
      console.error('User login error:', err);
    }
  };

  return (
    <>
      <div style={{
        backgroundImage: `url("https://directlinedev.com/media/services/service/background/background_20_hD8OPbD.wide.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div className="container text-white">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2>Log In</h2>
              <form>
                {/* ... (email and password inputs) */}
              </form>
              <div className="row">
                <div className="col">
                  <button onClick={handleLogin} className='btn btn-success bg-dark rounded-2'><strong>Login_In As User</strong></button>
                </div>
                <div className="col">
                  <button onClick={handleLoginAdmin} className='btn btn-success bg-dark rounded-2'><strong>Login_In As Admin</strong></button>
                </div>
              </div>
              <Link to='/register' className='text-white'><strong>Sign Up</strong></Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default success;
