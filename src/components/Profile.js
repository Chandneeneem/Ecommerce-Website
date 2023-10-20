

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Nav';
import Footer from './Footer';
function Profile() {
    const [user, setUser] = useState(null);
    useEffect(() => {

        const token = localStorage.getItem('token');
        console.log("user token", token);

        if (token) {
            fetch('http://localhost:8081/api/getUser', {
                method: 'GET',
                headers: {
                    Authorization: `${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {

                    if (data.data) {
                        setUser(data.data);
                    }
                    else {
                        // Handle authentication or unauthorized 
                        console.error(data.error);
                    }
                    console.log("the user", data.data)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, []);


    return (


        <>
            <Navbar></Navbar>

            <div className="container mt-5 p-2 ">
                {user ? (
                    <div>
                        <h2 className="mb-3">Welcome, {user.name}!</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <img
                                    src={`http://localhost:8081/api/getImage/${user.profileImage}`} // Add image source if available
                                    alt="User Profile"
                                    className="img-fluid rounded-circle"
                                />
                            </div>
                            <div className="col-md-8">
                                <p><strong>Name:</strong> {user.name}</p>

                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone Number:</strong>91+{user.phoneNumber}</p>
                                <p><strong>Address:</strong> {user.address}</p>
                                <p><strong>ChangePassword:</strong><Link to='/changepass'> Click to Channge_it</Link></p>
                                <div class="col-12">
                                    <Link to='/home'><button class="btn btn-dark" type="submit">Back to Home </button></Link>

                                </div>
                                <div class='mt-2' >

                                    <Link to='/uprofile' className="nav-link active " aria-current="page"> <button class='btn btn-dark'>Update_Profile</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>Loading profile...</p>
                    </div>
                )}





            </div>
            <Footer></Footer>


        </>
    );
}

export default Profile;


