
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigator = useNavigate();

  const handleChangePassword = async () => {


    try {

      if (newPassword !== confirmPassword) {
        setError("New password and confirm password don't match.");
        toast.error("New password and confirm password don't match.");
        return;
      }

      const response = await axios.post('http://localhost:8081/api/changePassword', {
        oldPassword,
        newPassword,
        confirmPassword,
      }, {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });

      if (response.data.status) {
        setSuccessMessage('Password changed successfully');
        toast.success('Password changed successfully', {
          autoClose: 5000, // Auto-close the toast after 5 seconds
        });
        setTimeout(() => {
          navigator('/profile');
        }, 2000);
        // navigator('/profile');
        setError('');
      } else {
        setSuccessMessage('');
        setError(response.data.message);
        toast.error("Your old password doesn't match. Please try again.");
      }
    } catch (err) {
      console.error('Change password error:', err);
      setError('Password change failed. Please try again later.');
      toast.error('Password change failed. Please try again later.');
    }
  };

  return (
    <div>
      <h1 class="d-flex justify-content-center text-white bg-dark align-items-center"> Change Your Password</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2>Change Password</h2>
            <div className="error">{error}</div>
            <div className="success">{successMessage}</div>
            <form>
              <div className="mb-3">
                <label>Old Password:</label>
                <input
                  type="password" className='form-control rounded-0'
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <br />
              <div className="mb-3">
                <label>New Password:</label>
                <input
                  type="password" className='form-control rounded-0'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <br />
              <div className="mb-3">
                <label>Confirm New Password:</label>
                <input
                  type="password" className='form-control rounded-0'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <br />
              <button type="button" className='btn btn-success boader w-20 bg-green rounded-2' onClick={handleChangePassword}>
                Change Password
              </button>
              <div class="col-12 mt-2">
                <Link to='/profile'><button class="btn btn-dark" type="submit">Back to Profile</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default ChangePassword;
