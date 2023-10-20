
import React from 'react'
import { Nav, Link } from 'react-router-dom'
import axios from 'axios';

const AdminNav = () => {

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
    <div>

      <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
        <nav class="nav nav-pills flex-column">
          <ul>
            <li><Link to="/adminh">Dashboard</Link></li>
            <li> <Link to="/alluser">All Users</Link></li>
            <li> <Link to='/showadminp'>All Products</Link></li>
            <li><Link to='/addp'>Add New Product</Link></li>
            <li><Link to='/delprod'>Delete Product</Link></li>
            <li><Link onClick={handleLogout} to="/">Logout</Link></li>
          </ul>


        </nav>
      </nav>


    </div>
  )
}

export default AdminNav
