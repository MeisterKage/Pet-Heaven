import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <div className="container">
                <div className="page-header">
                    <h1>Our Comprehensive Services</h1>
                    <p>From rescue to rehabilitation to forever homes - we're here every step of the way</p>
                </div>

                <div className="services-grid">
                    <div className="service-card">
                        <img src="/Images/home.png" alt="home" />
                        <h3>Pet Adoption Program</h3>
                        <p>Our carefully designed adoption process ensures perfect matches between pets and families. We believe adoption is a lifetime commitment and provide ongoing support.</p>
                        <ul>
                            <li>Comprehensive behavioral assessments</li>
                            <li>Medical clearance and full health records</li>
                            <li>Post-adoption support and training resources</li>
                            <li>30-day trial adoption period</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <img src="/Images/heart.png" alt="heart" />
                        <h3>Foster Care Network</h3>
                        <p>Our foster families provide temporary homes, helping us save more lives by freeing up shelter space and giving pets home environment experience.</p>
                        <ul>
                            <li>All supplies provided (food, bedding, medical)</li>
                            <li>24/7 veterinary support access</li>
                            <li>Training and behavior modification support</li>
                            <li>Flexible time commitments (2 weeks - 3 months)</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <img src="/Images/health.png" alt="medical" />
                        <h3>Medical & Rehabilitation</h3>
                        <p>Our on-site veterinary clinic provides comprehensive care, from emergency treatment to ongoing rehabilitation for pets with special needs.</p>
                        <ul>
                            <li>Emergency medical treatment</li>
                            <li>Spay/neuter surgeries</li>
                            <li>Vaccinations and preventive care</li>
                            <li>Physical therapy and senior pet care</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <img src="/Images/volunteer.png" alt="volunteer" />
                        <h3>Volunteer Programs</h3>
                        <p>Join our community of dedicated volunteers who make our mission possible through various roles tailored to different skills and availability.</p>
                        <ul>
                            <li>Animal care and socialization</li>
                            <li>Event planning and fundraising</li>
                            <li>Administrative and technical support</li>
                            <li>Community outreach and education</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <img src="/Images/hat.png" alt="hat" />
                        <h3>Education & Training</h3>
                        <p>We believe prevention is key. Our educational programs help create responsible pet owners and reduce pet surrender rates in our community.</p>
                        <ul>
                            <li>Basic obedience training classes</li>
                            <li>Pet first aid and CPR certification</li>
                            <li>School outreach programs</li>
                            <li>Behavioral consultation services</li>
                        </ul>
                    </div>

                    <div className="service-card">
                        <img src="/Images/community.png" alt="community" />
                        <h3>Community Support</h3>
                        <p>We help keep pets with their families through various support programs designed to prevent unnecessary surrenders.</p>
                        <ul>
                            <li>Pet food bank for families in need</li>
                            <li>Low-cost vaccination clinics</li>
                            <li>Emergency boarding during crises</li>
                            <li>Senior pet adoption subsidies</li>
                        </ul>
                    </div>
                </div>

                <div className="service-contact" style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', background: '#f8f9fa', borderRadius: '12px' }}>
                    <h3>Get Involved Today</h3>
                    <p>Whether you want to adopt, foster, volunteer, or donate - every contribution makes a difference.</p>
                    <div style={{ marginTop: '2rem' }}>
                        <strong>Contact our team:</strong> (65) 6123 4567 | info@petheaven.org
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;