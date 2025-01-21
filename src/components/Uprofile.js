/*
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Nav';
function Profile() {
    const [user, setUser] = useState(null);
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        address: '',
        phoneNumber: '',
        image: null,
    });

    useEffect(() => {
        // Fetch user information from the server using the stored token
        const token = localStorage.getItem('token');
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
                        setFormData({
                            address: data.data.address,
                            phoneNumber: data.data.phoneNumber,
                            image: null, // Load the user's image here if available
                        });
                    } else {
                        console.error(data.message);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData({
            ...formData,
            image: imageFile,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (token) {
            const form = new FormData();
            form.append('address', formData.address);
            form.append('phoneNumber', formData.phoneNumber);
            form.append('image', formData.image);

            try {
                //http://localhost:8081/api/updateProfile
                //http://localhost:8081/api/update-profile   1
                const response = await fetch('http://localhost:8081/api/updateProfile', {
                    method: 'POST',
                    headers: {
                        Authorization: `${token}`,
                    },
                    body: form,
                });

                if (response.ok) {
                    console.log('Profile updated successfully');
                    Navigate('/profile')
                } else {
                    console.error('Profile update failed');
                }
            } catch (error) {
                console.error('Error updating profile:', error);
            }
        }
    };

    return (

        <>
            <Navbar></Navbar>
            <div className="container mt-5">
                {user ? (
                    <div>
                        <h2>Welcome, {user.name}!</h2>
                        <p>Email: {user.email}</p>
                        <form action="/updateProfile" method="POST" enctype="multipart/form-data">
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Address:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">
                                    Phone Number:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    Profile Image:
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                Update Profile
                            </button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <p>Loading profile...</p>
                    </div>
                )}

            </div>
        </>
    );
}

export default Profile;

*/
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
    const [user, setUser] = useState(null);
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        address: '',
        phoneNumber: '',
        image: null,
    });

    useEffect(() => {
        // Fetch user information from the server using the stored token
        const token = localStorage.getItem('token');
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
                        setFormData({
                            address: data.data.address,
                            phoneNumber: data.data.phoneNumber,
                            image: null, // Load the user's image here if available
                        });
                    } else {
                        console.error(data.message);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData({
            ...formData,
            image: imageFile,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (token) {
            const form = new FormData();
            form.append('address', formData.address);
            form.append('phoneNumber', formData.phoneNumber);
            form.append('image', formData.image);

            try {
                const response = await fetch('http://localhost:8081/api/updateProfile', {
                    method: 'POST',
                    headers: {
                        Authorization: `${token}`,
                    },
                    body: form,
                });

                if (response.ok) {
                    console.log('Profile updated successfully');
                    toast.success('Profile updated successfully');
                    setTimeout(() => {
                        Navigate('/profile');
                    }, 2000);
                    // Navigate('/profile');
                } else {
                    console.error('Profile update failed');
                    toast.error('Profile update failed');
                }
            } catch (error) {
                console.error('Error updating profile:', error);
                toast.error('Error updating profile');
            }
        }
    };

    return (
        <>
            <Navbar></Navbar>
            <div className="container mt-5">
                {user ? (
                    <div>
                        <h2>Welcome, {user.name}!</h2>
                        <p>Email: {user.email}</p>
                        <form action="/updateProfile" method="POST" enctype="multipart/form-data">
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Address:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">
                                    Phone Number:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    Profile Image:
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                Update Profile
                            </button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <p>Loading profile...</p>
                    </div>
                )}
            </div>
            <ToastContainer />
        </>
    );
}

export default Profile;
