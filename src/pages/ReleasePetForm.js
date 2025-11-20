import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReleasePetForm.css';

const ReleasePetForm = () => {
    const [formData, setFormData] = useState({
        ownerName: '',
        email: '',
        phone: '',
        address: '',
        petName: '',
        petType: '',
        petBreed: '',
        petAge: '',
        reason: '',
        medicalHistory: '',
        behavior: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('petHeavenIsLoggedIn') === 'true';
        if (!isLoggedIn) {
            navigate('/login', {
                state: {
                    returnTo: '/release',
                    actionType: 'release'
                }
            });
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Pet Release Form Data:', formData);
        alert('Thank you for your submission. We will contact you soon.');
        // Reset form
        setFormData({
            ownerName: '', email: '', phone: '', address: '',
            petName: '', petType: '', petBreed: '', petAge: '',
            reason: '', medicalHistory: '', behavior: ''
        });
    };

    return (
        <div className="release-form-container">
            <h1>Release a Pet to Pet Heaven</h1>
            <p>
                We understand that circumstances change. If you can no longer care for your pet,
                we're here to help. Please provide as much information as possible.
            </p>

            <form onSubmit={handleSubmit} className="release-form">
                <h2>Owner Information</h2>
                <div className="form-group">
                    <label>Full Name *</label>
                    <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <h2>Pet Information</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label>Pet's Name *</label>
                        <input
                            type="text"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Pet Type *</label>
                        <select
                            name="petType"
                            value={formData.petType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select...</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Breed</label>
                        <input
                            type="text"
                            name="petBreed"
                            value={formData.petBreed}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="text"
                            name="petAge"
                            value={formData.petAge}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Reason for Release *</label>
                    <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        rows="3"
                    />
                </div>

                <div className="form-group">
                    <label>Medical History</label>
                    <textarea
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleChange}
                        rows="3"
                    />
                </div>

                <div className="form-group">
                    <label>Behavior & Temperament</label>
                    <textarea
                        name="behavior"
                        value={formData.behavior}
                        onChange={handleChange}
                        rows="3"
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Submit Release Request
                </button>
            </form>
        </div>
    );
};

export default ReleasePetForm;