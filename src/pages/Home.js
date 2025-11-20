import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Pet Heaven</h1>
                    <p>Where every pet finds their forever home and every heart finds its perfect companion</p>
                    <div className="hero-buttons">
                        <Link to="/pets" className="btn btn-primary">Find Your New Best Friend</Link>
                        <Link to="/about" className="btn btn-secondary">Our Story</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/Images/dogcat.avif" alt="Happy pets with their new families" />
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission">
                <div className="container">
                    <h2>Where Tails Start Wagging Again.</h2>
                    <p>
                        For over five years, Pet Heaven has dedicated itself to giving abandoned pets a second chance at life. We rescue, rehabilitate, and rehome them, providing lifelong support to ensure every adoption leads to a loving, forever family.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <h2>Join Our Mission of Love</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <img src="/Images/dog.png" alt="Adopt a pet" />
                            </div>
                            <h3>Adopt, Don't Shop</h3>
                            <p>Browse our carefully vetted pets ready for adoption. Each animal receives full medical care, behavioral assessment, and lots of love before meeting their new family.</p>
                            <Link to="/pets" className="feature-link">Meet Our Pets →</Link>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <img src="/Images/home.png" alt="Foster a pet" />
                            </div>
                            <h3>Foster Heroes</h3>
                            <p>Become a temporary home for pets in transition. We provide all supplies - you provide the love and comfort they need while waiting for forever homes.</p>
                            <Link to="/services" className="feature-link">Become a Foster →</Link>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <img src="/Images/donate.png" alt="Donate to support pets" />
                            </div>
                            <h3>Support Our Work</h3>
                            <p>Your donations provide medical care, food, and shelter. Every dollar helps us save more lives and create more happy endings.</p>
                            <Link to="/services" className="feature-link">Make a Difference →</Link>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <img src="/Images/paw.png" alt="Responsible pet surrender" />
                            </div>
                            <h3>Responsible Surrender</h3>
                            <p>If you can no longer care for your pet, we provide a safe and compassionate surrender process with no judgment - only support.</p>
                            <Link to="/release" className="feature-link">Learn About Surrender →</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;