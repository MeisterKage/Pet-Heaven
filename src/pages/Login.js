import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState({ text: '', type: '' });
    const [isLoading, setIsLoading] = useState(false);

    // Get the return URL from navigation state or default to home
    const from = location.state?.returnTo || '/';
    const actionType = location.state?.actionType || ''; // 'adopt' or 'release'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear message when user starts typing
        if (message.text) {
            setMessage({ text: '', type: '' });
        }
    };

    const validateForm = () => {
        if (!formData.email.trim()) {
            setMessage({ text: 'Email is required', type: 'error' });
            return false;
        }

        if (!formData.password) {
            setMessage({ text: 'Password is required', type: 'error' });
            return false;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setMessage({ text: 'Please enter a valid email address', type: 'error' });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ text: '', type: '' });

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call delay for better UX
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Get registered users from localStorage
            const registeredUsers = JSON.parse(localStorage.getItem('petHeavenRegisteredUsers') || '[]');

            // Check if user exists and password matches
            const user = registeredUsers.find(u =>
                u.email === formData.email && u.password === formData.password
            );

            if (user) {
                // Set login state
                localStorage.setItem('petHeavenIsLoggedIn', 'true');
                const userData = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone
                };
                localStorage.setItem('petHeavenCurrentUser', JSON.stringify(userData));

                // Call the onLogin callback to update App state
                if (onLogin) {
                    onLogin(userData);
                }

                setMessage({
                    text: `Welcome back, ${user.firstName}!`,
                    type: 'success'
                });

                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 1500);
            } else {
                setMessage({
                    text: 'Invalid email or password. Please try again.',
                    type: 'error'
                });
            }
        } catch (error) {
            setMessage({
                text: 'An error occurred during login. Please try again.',
                type: 'error'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const getActionMessage = () => {
        switch (actionType) {
            case 'adopt':
                return 'To adopt a pet, please sign in to your account.';
            case 'release':
                return 'To release a pet for adoption, please sign in to your account.';
            default:
                return 'Sign in to your account to continue your pet adoption journey';
        }
    };

    return (
        <div className="signup-page">
            <div className="container">
                <div className="signup-container">
                    <div className="signup-header">
                        <h1>Welcome to Pet Heaven</h1>
                        <p>{getActionMessage()}</p>
                        {actionType && (
                            <div className="action-note">
                                <strong>Note:</strong> You need to be logged in to {actionType} a pet.
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="signup-form" noValidate>
                        {message.text && (
                            <div className={`message ${message.type}`}>
                                {message.text}
                            </div>
                        )}

                        <div className="form-section">
                            <h3>Account Information</h3>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email address"
                                    disabled={isLoading}
                                    className={message.type === 'error' ? 'error' : ''}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password *</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your password"
                                    disabled={isLoading}
                                    className={message.type === 'error' ? 'error' : ''}
                                />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                                <Link to="/forgot-password" className="forgot-password">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <div className="form-actions">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing In...' : 'Sign In'}
                            </button>

                            <div className="login-link">
                                <p>Don't have an account? <Link to="/signup">Create one here</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;