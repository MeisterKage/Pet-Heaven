import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PetsList.css';

const PetsList = () => {
    const [pets] = useState([
        {
            id: 1,
            name: "Buddy",
            type: "Dog",
            breed: "Golden Retriever Mix",
            age: "2 years",
            gender: "Male",
            size: "Large",
            description: "Buddy is the definition of a gentle giant! This sweet boy was found wandering alone but has shown nothing but love to everyone he meets. He's house-trained, knows basic commands, and gets along wonderfully with children and other dogs.",
            image: "/Images/Buddy.avif",
            status: "Available"
        },
        {
            id: 2,
            name: "Luna",
            type: "Cat",
            breed: "Tabby mix",
            age: "2.5 years",
            gender: "Female",
            size: "Large",
            description: "Meet Luna, our elegant lady with Olive! She was surrendered when her family moved overseas. Luna is independent yet affectionate - she'll follow you around but respects your space.",
            image: "/Images/luna.jpg",
            status: "Available"
        },
        {
            id: 3,
            name: "Rocky",
            type: "Dog",
            breed: "Jack Russell Terrier",
            age: "4 years",
            gender: "Male",
            size: "Small",
            description: "Rocky is full of personality and energy! This clever boy was found as a stray and has completely won over our staff. He's incredibly smart, learns quickly, and loves puzzle toys.",
            image: "/Images/Rocky.avif",
            status: "Available"
        },
        {
            id: 4,
            name: "Mittens",
            type: "Cat",
            breed: "Siamese Mix",
            age: "3 years",
            gender: "Female",
            size: "Small",
            description: "Mittens is our talkative beauty! She has the classic Siamese vocalizations and isn't shy about telling you about her day. She was surrendered due to owner allergies.",
            image: "/Images/mittens.avif",
            status: "Available"
        },
        {
            id: 5,
            name: "Daisy",
            type: "Dog",
            breed: "Beagle",
            age: "5 years",
            gender: "Female",
            size: "Medium",
            description: "Daisy is the sweetest snuggler you'll ever meet! This senior lady was owner-surrendered when her family could no longer care for her. She's calm, gentle, and perfectly content.",
            image: "/Images/Daisy.avif",
            status: "Available"
        },
        {
            id: 6,
            name: "Simba",
            type: "Cat",
            breed: "Orange Tabby",
            age: "8 months",
            gender: "Male",
            size: "Small",
            description: "Simba is our playful prince! This energetic kitten was rescued with his siblings from a storm drain. He's curious, brave, and always ready for adventure.",
            image: "/Images/Simba.avif",
            status: "Available"
        }
    ]);

    const [filter, setFilter] = useState('all');

    const filteredPets = filter === 'all'
        ? pets
        : pets.filter(pet => pet.type.toLowerCase() === filter);

    // Get counts for display
    const allCount = pets.length;
    const dogCount = pets.filter(pet => pet.type === 'Dog').length;
    const catCount = pets.filter(pet => pet.type === 'Cat').length;

    return (
        <div className="pets-page">
            <div className="container">
                <div className="page-header">
                    <h1>Meet Our Rescue Pets</h1>
                    <p>Each of these amazing animals is waiting for their second chance at happiness. Could you be their forever family?</p>
                </div>

                {/* Gallery Style Layout with Sidebar Filter */}
                <div className="gallery-layout">
                    {/* Sidebar Filter */}
                    <div className="filter-sidebar">
                        <h3 className="filter-title">Filter Pets</h3>

                        <div className="filter-group">
                            <label className="filter-label">Pet Type:</label>
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Pets</option>
                                <option value="dog">Dogs Only</option>
                                <option value="cat">Cats Only</option>
                            </select>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="gallery-content">
                        {/* Results Header */}
                        <div className="results-header">
                            <h3 className="results-title">
                                {filter === 'all' && `All Rescue Pets (${allCount})`}
                                {filter === 'dog' && `Dogs Waiting for Homes (${dogCount})`}
                                {filter === 'cat' && `Cats Waiting for Homes (${catCount})`}
                            </h3>
                            <div className="results-count">
                                Showing {filteredPets.length} pets
                            </div>
                        </div>

                        {/* Pets Grid */}
                        <div className="gallery-grid">
                            {filteredPets.map(pet => (
                                <div key={pet.id} className="gallery-item">
                                    <div className="gallery-image">
                                        {/* Replaced placeholder with actual image */}
                                        <img
                                            src={pet.image}
                                            alt={pet.name}
                                            onError={(e) => {
                                                // Fallback if image fails to load
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        {/* Fallback placeholder */}
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#e9ecef',
                                            display: 'none', // Hidden by default
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#666',
                                            fontSize: '0.9rem'
                                        }}>
                                            [Photo of {pet.name}]
                                        </div>
                                        <span className={`status-badge ${pet.status.toLowerCase()}`}>
                                            {pet.status}
                                        </span>
                                    </div>

                                    <div className="pet-info">
                                        <div className="pet-header">
                                            <h4 className="pet-name">{pet.name}</h4>
                                            <span className="pet-type">{pet.type}</span>
                                        </div>

                                        <p className="pet-breed">{pet.breed}</p>

                                        <div className="pet-meta">
                                            <span className="pet-age">{pet.age}</span>
                                            <span className="pet-gender">{pet.gender}</span>
                                            <span className="pet-size">{pet.size}</span>
                                        </div>

                                        <p className="pet-description">{pet.description}</p>

                                        <div className="pet-actions">
                                            <Link to="/adopt" state={{ pet }} className="btn btn-primary">
                                                Adopt {pet.name}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredPets.length === 0 && (
                            <div className="no-pets-message">
                                <h3>No pets found for "{filter}"</h3>
                                <p>Try selecting "All Pets" from the filter.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Adoption Info */}
                <div className="adoption-info">
                    <h3>Adoption Process</h3>
                    <p>All our pets are vaccinated, microchipped, and spayed/neutered. Our adoption process includes:</p>
                    <ul>
                        <li>Application review</li>
                        <li>Meet & greet session</li>
                        <li>Home visit (virtual or in-person)</li>
                        <li>Adoption fee: $150-300 (includes all medical)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PetsList;