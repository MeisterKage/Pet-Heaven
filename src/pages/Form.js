import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        occupation: '',
        housingType: '',
        hasChildren: '',
        hasOtherPets: '',
        petExperience: '',
        dailySchedule: '',
        adoptionReason: '',
        preferredPet: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('petHeavenIsLoggedIn') === 'true';
        if (!isLoggedIn) {
            navigate('/login', {
                state: {
                    returnTo: '/adopt',
                    actionType: 'adopt'
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
        onSubmit(formData);
        alert('Thank you for your adoption application! Our team will review it and contact you within 2-3 business days.');
        setFormData({
            fullName: '', email: '', phone: '', address: '', occupation: '',
            housingType: '', hasChildren: '', hasOtherPets: '', petExperience: '',
            dailySchedule: '', adoptionReason: '', preferredPet: ''
        });
    };

    return (
        <div className="form-page-container">
            <div className="form-page-header">
                <h1>Adoption Application</h1>
                <p>Thank you for considering adoption! This application helps us ensure the best possible match between you and your new companion.</p>
            </div>

            <form className="form-container" onSubmit={handleSubmit}>
                <h3 className="form-section-title">Personal Information</h3>
                <div className="form-group">
                    <label>Full Name *</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-grid-2col">
                    <div className="form-group">
                        <label>Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number *</label>
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
                    <label>Full Address *</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        placeholder="Street, City, Postal Code"
                    />
                </div>

                <h3 className="form-section-title">Living Situation</h3>
                <div className="form-grid-2col">
                    <div className="form-group">
                        <label>Housing Type *</label>
                        <select name="housingType" value={formData.housingType} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment/Condo</option>
                            <option value="hdb">HDB Flat</option>
                            <option value="landed">Landed Property</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Do you have children? *</label>
                        <select name="hasChildren" value={formData.hasChildren} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <div className="form-grid-2col">
                    <div className="form-group">
                        <label>Other Pets in Home? *</label>
                        <select name="hasOtherPets" value={formData.hasOtherPets} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="none">None</option>
                            <option value="dogs">Dogs</option>
                            <option value="cats">Cats</option>
                            <option value="both">Both Dogs & Cats</option>
                            <option value="other">Other Pets</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Pet Experience Level *</label>
                        <select name="petExperience" value={formData.petExperience} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="first-time">First-time Owner</option>
                            <option value="some">Some Experience</option>
                            <option value="experienced">Experienced Owner</option>
                        </select>
                    </div>
                </div>

                <h3 className="form-section-title">About Your Lifestyle</h3>
                <div className="form-group">
                    <label>Occupation *</label>
                    <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Describe your typical daily schedule *</label>
                    <textarea
                        name="dailySchedule"
                        value={formData.dailySchedule}
                        onChange={handleChange}
                        required
                        rows="3"
                        placeholder="Work hours, exercise routine, time spent at home..."
                    />
                </div>

                <div className="form-group">
                    <label>Why do you want to adopt a pet? *</label>
                    <textarea
                        name="adoptionReason"
                        value={formData.adoptionReason}
                        onChange={handleChange}
                        required
                        rows="3"
                        placeholder="Tell us about your motivation for adoption..."
                    />
                </div>

                <div className="form-group">
                    <label>Which pet are you interested in? (Optional)</label>
                    <input
                        type="text"
                        name="preferredPet"
                        value={formData.preferredPet}
                        onChange={handleChange}
                        placeholder="e.g., Buddy the Golden Retriever, or leave blank for recommendations"
                    />
                </div>

                <button type="submit" className="submit-button">
                    Submit Adoption Application
                </button>

                <p className="form-footer">
                    By submitting this form, you agree to our adoption process including home visit and reference checks.
                </p>
            </form>
        </div>
    );
};

export default Form;