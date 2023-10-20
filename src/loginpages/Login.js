
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const navigator = useNavigate();

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
        console.log('Login successful!');
        //  toast.success('Login successful!', { autoClose: 5000 });
        if (status === true) {
          toast.success('Login successful!', { autoClose: 5000 });
          // navigator('/home');
          setTimeout(() => {
            navigator('/home');
          }, 2000);
        }
        // navigator('/home');
      } else {
        setError('Login failed. Please check your credentials.');
        toast.error('Login failed. Please check your credentials.', { autoClose: 3000 });
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', err);
      toast.error('Login failed. Please check your credentials.', { autoClose: 3000 });

    }
  };

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
        // Display a success toast notification
        //toast.success('Admin login successful!', { autoClose: 3000 });
        if (status === true) {
          toast.success('Admin login successful!', { autoClose: 3000 });
          setTimeout(() => {
            navigator('/adminh');
          }, 3000);
        }
      } else {
        setError('Login failed. Please check your credentials.');
        toast.error('Admin login failed. Please check your credentials.', { autoClose: 5000 });
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', err);
      toast.error('Admin login failed. Please check your credentials.', { autoClose: 5000 });
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
              <h2>Log In </h2>
              <div className="error">{error}</div>
              <from onSubmit={handleLogin}>
                <div className='mb-3'>
                  <label ><strong>Email</strong></label>

                  <input type="text" value={email} className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                  <label><strong>Password</strong></label>

                  <input type="password" value={password} className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} />

                </div>

                <div class="row">
                  <div class="col ">

                    <button type='submit' className='btn btn-success bg-dark rounded-2 ' onClick={handleLogin}><strong>Login_In As User</strong></button>
                  </div>
                  <div class="col">
                    <button type='submit' className='btn btn-success bg-dark rounded-2 ' onClick={handleLoginAdmin}><strong>Login_In As Admin</strong></button>
                  </div>
                </div>

                <Link to='/register' className='text-white'><strong>Sign Up</strong></Link>

              </from>

            </div>
          </div>

        </div>
        <ToastContainer position="top-right" autoClose={5000} />
      </div>

    </>
  );
};

export default Login;



