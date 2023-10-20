
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';



function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/api/getLoginuser')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Verify the data structure here
                if (data && Array.isArray(data.data)) {
                    setUsers(data.data); // Access the array within the 'data' property
                } else {
                    console.error('API response does not contain an array of user:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
    }, []);

    return (
        <>

            <div class="p-3 mb-2 bg-black text-white">Welcom to admin Pannel</div>
            <div class="row">
                <div class="col-4">
                    <AdminNav></AdminNav>
                </div>

                <div class="col-8">
                    <div>

                        <h2>Registered User List</h2>
                        <div class="col-12">
                            <Link to='/adminh'><button class="btn btn-dark" type="submit"> back to Dashboard Home</button></Link>
                        </div>
                        <table className="table table-striped">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>email</th>
                                    <th>password</th>
                                    <th>phoneNumber</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.address}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>

        </>
    );
}

export default UserList;
