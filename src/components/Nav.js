//import React from 'react'
import { LuUser } from 'react-icons/lu'
import { TiShoppingCart } from 'react-icons/ti'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const Navbar = () => {

    const handleLogout = async () => {
    try {
      // Make an API request to the server to log the user out
      const token = localStorage.getItem('token'); // Get the user's token from localStorage
      const headers = {
        'Authorization': `${token}` // Include the token in the Authorization header
      };

      const response = await axios.post('http://localhost:8081/api/logout', null, { headers });

      if (response.status === 200) {
        console.log('Logout successful'); // For demonstration purposes
      } else {
        console.error('Logout failed'); // For demonstration purposes
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };



  return (
    <>

      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/home'>E-Commerce<TiShoppingCart></TiShoppingCart></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/prodhome">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>

            </ul>
            <div className='d-flex'>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to='/cart'>{<TiShoppingCart />}Cart</Link>
                </li>



                <li className="nav-item dropdown mr-2" >
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <LuUser /> profile
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/profile" >veiw profile</Link></li>
                    <li><Link className="dropdown-item" to="/uprofile">Update Profile</Link></li>
                    <li><Link className="dropdown-item" onClick={handleLogout} to="/">Logout</Link></li>

                  </ul>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </nav>
      <br>
      </br>
      <br></br>



    </>
  )
}

export default Navbar
