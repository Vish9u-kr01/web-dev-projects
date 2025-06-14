import React from 'react';
import { useNavigate } from "react-router-dom";
const Dashboard = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
   
    const handleLogout = () => {
        localStorage.removeItem('currentUser'); // Remove current user from localStorage
       navigate("/"); // Redirect to login page
    };

    return(
        <div className="dashboard-container">
            <div className='dashboard-box'>
                <h1>Welcome, {currentUser?.username || User}</h1>
                <p>Username: {currentUser?.username}</p>
                <p>Email: {currentUser?.email}</p>
                 <p>Password: {currentUser?.password}</p>
                 <button onClick={handleLogout}>Logout</button>
        </div>
        </div>
    );
};
export default Dashboard;