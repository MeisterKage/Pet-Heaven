import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const isLoggedIn = localStorage.getItem('petHeavenIsLoggedIn') === 'true';
    const currentUser = JSON.parse(localStorage.getItem('petHeavenCurrentUser') || '{}');

    const handleLogout = () => {
        localStorage.removeItem('petHeavenIsLoggedIn');
        localStorage.removeItem('petHeavenCurrentUser');
        window.location.reload(); // Refresh to update UI
    };

    return (
        <nav className="navigation">
            <div className="container">
                <Link to="/" className="logo">Pet Heaven</Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/pets">Adopt</Link>
                    <Link to="/gallery">Gallery</Link>
                    {isLoggedIn ? (
                        <div className="user-menu">
                            <span>Welcome, {currentUser.firstName}</span>
                            <button onClick={handleLogout} className="btn-logout">Logout</button>
                        </div>
                    ) : (
                        <div className="auth-links">
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;