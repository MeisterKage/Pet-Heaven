import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1>About Pet Heaven</h1>

            <div className="about-content">
                <section className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        Pet Heaven is a non-profit organization established in 2010,
                        dedicated to rescuing and rehoming abandoned and surrendered pets.
                        Our team of volunteers and staff work tirelessly to provide shelter,
                        medical care, and love to animals in need.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Facilities</h2>
                    <ul>
                        <li>State-of-the-art animal shelter with comfortable living spaces</li>
                        <li>Veterinary clinic for medical care and spay/neuter services</li>
                        <li>Training and socialization areas</li>
                        <li>Outdoor play areas for exercise and enrichment</li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>Our Process</h2>
                    <div className="process-steps">
                        <div className="step">
                            <h3>1. Rescue</h3>
                            <p>We rescue pets from shelters and accept owner surrenders</p>
                        </div>
                        <div className="step">
                            <h3>2. Rehabilitate</h3>
                            <p>Medical care, training, and socialization</p>
                        </div>
                        <div className="step">
                            <h3>3. Rehome</h3>
                            <p>Careful matching and adoption process</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;