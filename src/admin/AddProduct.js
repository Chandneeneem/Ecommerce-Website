
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import AdminNav from './AdminNav';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: '', // Store the image URL
        category_id: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8081/api/addProductimg', product);

            if (response.status === 201) {
                setSuccessMessage('Product added successfully!');
                //Navigate('/showadminp');
                setErrorMessage('');
                toast.success('Product added successfully!', { autoClose: 5000 });
                setTimeout(() => {
                    Navigate('/showadminp');
                }, 5000);
            }
        } catch (error) {
            setErrorMessage('Failed to add the product. Please try again.');
            setSuccessMessage('');
            toast.error('Failed to add the product. Please try again.', { autoClose: 3000 });
        }
    };

    return (
        <>
            <div class="p-3 mb-2 bg-black text-white">Welcome to admin Panel</div>
            <div class="row">
                <div class="col-4">
                    <AdminNav></AdminNav>
                </div>
                <div class="col-8">
                    <Container>
                        <h2>Add a New Product</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="price"
                                    value={product.price}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="description"
                                    value={product.description}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="image">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    type="url"
                                    name="image"
                                    value={product.image}
                                    onChange={handleChange}
                                    placeholder="Enter image URL"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="category_id">
                                <Form.Label>Category_id</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="category_id"
                                    value={product.category_id}
                                    onChange={handleChange}
                                    required
                                />


                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="category_id"
                                        id="category1"
                                        value="1"
                                        checked={product.category_id === 1}
                                        onChange={handleChange}
                                    />
                                    <label class="form-check-label" for="category1">
                                        Option 1 for add the Laptops
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="category_id"
                                        id="category2"
                                        value="2"
                                        checked={product.category_id === 2}
                                        onChange={handleChange}
                                    />
                                    <label class="form-check-label" for="category2">
                                        Option 2 for add the Smartphone
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="category_id"
                                        id="category3"
                                        value="3"
                                        checked={product.category_id === 3}
                                        onChange={handleChange}
                                    />
                                    <label class="form-check-label" for="category3">
                                        Option 3 for add the Watch
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="category_id"
                                        id="category4"
                                        value="4"
                                        checked={product.category_id === 4}
                                        onChange={handleChange}
                                    />
                                    <label class="form-check-label" for="category4">
                                        Option 4 for add the Headphone
                                    </label>
                                </div>
                            </Form.Group>


                            <Button variant="primary p-2 mt-2" type="submit">
                                Add Product
                            </Button>
                        </Form>
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    </Container>
                </div>
            </div>
            <ToastContainer /> {/* Include this component to display toast notifications */}
        </>
    );
};

export default AddProduct;

