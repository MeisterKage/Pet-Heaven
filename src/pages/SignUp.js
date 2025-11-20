import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('');

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setMessage('Password must be at least 6 characters long');
            return;
        }

        // Get existing users
        const existingUsers = JSON.parse(localStorage.getItem('petHeavenRegisteredUsers') || '[]');

        // Check if email already exists
        if (existingUsers.find(user => user.email === formData.email)) {
            setMessage('Email already registered');
            return;
        }

        // Add new user
        const newUser = {
            id: Date.now(),
            ...formData,
            registeredAt: new Date().toISOString()
        };

        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem('petHeavenRegisteredUsers', JSON.stringify(updatedUsers));

        setMessage('Registration successful! You can now login.');
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="signup-page">
            <div className="container">
                <div className="signup-container">
                    <div className="signup-header">
                        <h1>Join Pet Heaven</h1>
                        <p>Create an account to adopt pets and stay updated</p>
                    </div>

                    <form onSubmit={handleSubmit} className="signup-form">
                        {message && (
                            <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
                                {message}
                            </div>
                        )}

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="password">Password *</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    minLength="6"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password *</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary">
                                Create Account
                            </button>
                            <p className="login-link">
                                Already have an account? <Link to="/login">Login here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;