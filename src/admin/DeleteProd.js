/*
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';
import { Alert } from 'react-bootstrap';

const DeleteProd = () => {
    const [productId, setProductId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate();

    const handleDelete = async () => {

        const confirmation = window.confirm('Are you sure you want to delete this product?');

        if (confirmation) {
            try {

                const response = await axios.delete(`http://localhost:8081/api/products/${productId}`);

                if (response.status === 200) {
                    setSuccessMessage('Product deleted successfully!');
                    setErrorMessage('');
                    Navigate('/showadminp');
                }
            } catch (error) {
                setErrorMessage('Failed to delete the product. Please try again.');
                setSuccessMessage('');
            }
        }
    };

    return (
        <div>
            <div class="p-3 mb-2 bg-black text-white">Welcom to admin Pannel</div>
            <div class="row">
                <div class="col-4">
                    <AdminNav></AdminNav>
                </div>
                <div class="col-8">


                    <h2>Delete Product</h2>
                    <p>Enter the Product Id You want To delet It!...................</p>
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    <label htmlFor="productId">Product ID:</label>
                    <input
                        type="text"
                        id="productId"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        required
                    />
                    <button onClick={handleDelete}>Delete Product</button>

                </div>
            </div>
        </div>
    );
};

export default DeleteProd;
*/

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import { Alert } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteProd = () => {
    const [productId, setProductId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate();

    const handleDelete = async () => {
        const confirmation = window.confirm('Are you sure you want to delete this product?');

        if (confirmation) {
            try {
                const response = await axios.delete(`http://localhost:8081/api/products/${productId}`);

                if (response.status === 200) {
                    setSuccessMessage('Product deleted successfully!');
                    setErrorMessage('');
                    // Navigate('/showadminp');
                    toast.success('Product deleted successfully!', { autoClose: 3000 });
                    setTimeout(() => {
                        Navigate('/showadminp');
                    }, 3000);
                }
            } catch (error) {
                setErrorMessage('Failed to delete the product. Please try again.');
                setSuccessMessage('');
                toast.error('Failed to delete the product. Please try again', { autoClose: 3000 });
            }
        }
    };

    return (
        <div>
            <div className="p-3 mb-2 bg-black text-white">Welcome to the admin Panel</div>
            <div className="row">
                <div className="col-4">
                    <AdminNav />
                </div>
                <div className="col-8">
                    <h2>Delete Product</h2>
                    <p>Enter the Product Id You want To delete It!...................</p>
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    <label htmlFor="productId"><strong>Product ID:</strong></label>
                    <input
                        
                        type="text"
                        id="productId"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        required
                    />
                    <button  className='m-2 p-1 bg-danger text-dark 'onClick={handleDelete}><strong>Delete Product</strong></button>
                </div>
            </div>
            <ToastContainer /> {/* Include this component to display toast notifications */}
        </div>
    );
};

export default DeleteProd;
