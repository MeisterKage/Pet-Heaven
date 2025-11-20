import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, currentUser, onLogout }) => {
    const navigate = useNavigate();

    const handleAdoptClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            navigate('/login', {
                state: {
                    returnTo: '/adopt',
                    actionType: 'adopt'
                }
            });
        }
    };

    const handleReleaseClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            navigate('/login', {
                state: {
                    returnTo: '/release',
                    actionType: 'release'
                }
            });
        }
    };

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    Pet Heaven
                </Link>

                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/pets" className="nav-link">Available Pets</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/gallery" className="nav-link">Gallery</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/adopt" className="nav-link" onClick={handleAdoptClick}>Adopt</Link>
                    <Link to="/release" className="nav-link" onClick={handleReleaseClick}>Release Pet</Link>

                    {isLoggedIn ? (
                        <div className="user-menu">
                            <span>Welcome, {currentUser?.firstName || 'User'}!</span>
                            <button onClick={onLogout} className="btn-logout">
                                Logout
                            </button>
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

export default Navbar;