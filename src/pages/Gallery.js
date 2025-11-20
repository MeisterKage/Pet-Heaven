import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

const Gallery = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [error, setError] = useState(null);

    // Generate random dog names
    const generateDogName = () => {
        const names = ['Buddy', 'Max', 'Charlie', 'Cooper', 'Rocky', 'Bear', 'Duke', 'Zeus', 'Tucker', 'Bentley'];
        return names[Math.floor(Math.random() * names.length)];
    };

    // Generate random cat names
    const generateCatName = () => {
        const names = ['Luna', 'Bella', 'Lucy', 'Kitty', 'Chloe', 'Sophie', 'Lily', 'Milo', 'Oliver', 'Leo'];
        return names[Math.floor(Math.random() * names.length)];
    };

    // Generate dog descriptions
    const generateDogDescription = (breed) => {
        if (breed && breed.name) {
            return `${breed.name} - ${breed.temperament || 'Friendly and loyal companion'}. ${breed.bred_for || 'Great family pet'}.`;
        }
        const descriptions = [
            "A wonderful companion looking for a forever home. Loves playing fetch and going for walks.",
            "Sweet and affectionate dog who gets along with everyone. Perfect for an active family.",
            "Gentle soul who enjoys cuddles and quiet time. House-trained and knows basic commands.",
            "Energetic and playful, this pup would love a yard to run in and a family to adventure with."
        ];
        return descriptions[Math.floor(Math.random() * descriptions.length)];
    };

    // Generate cat descriptions
    const generateCatDescription = (breed) => {
        if (breed && breed.name) {
            return `${breed.name} - ${breed.temperament || 'Independent and affectionate'}. ${breed.description || 'Wonderful companion cat.'}`;
        }
        const descriptions = [
            "Curious and playful feline who loves exploring and napping in sunny spots.",
            "Affectionate lap cat who enjoys gentle pets and quiet companionship.",
            "Independent yet loving cat who would make a wonderful addition to any home.",
            "Playful and energetic, this cat loves toys and will keep you entertained for hours."
        ];
        return descriptions[Math.floor(Math.random() * descriptions.length)];
    };

    // Fetch all pets
    useEffect(() => {
        const fetchPets = async () => {
            setLoading(true);
            setError(null);

            try {
                console.log('Starting to fetch pets...');

                // Fetch dogs - simplified without API key
                const dogResponse = await axios.get('https://api.thedogapi.com/v1/images/search?limit=8');
                console.log('Dog API response:', dogResponse.data);

                const dogs = dogResponse.data.map((dog, index) => ({
                    id: `dog-${dog.id || index}`,
                    url: dog.url,
                    type: 'dog',
                    name: generateDogName(),
                    breed: dog.breeds && dog.breeds[0] ? dog.breeds[0].name : 'Mixed Breed',
                    description: generateDogDescription(dog.breeds && dog.breeds[0] ? dog.breeds[0] : null)
                }));

                // Fetch cats
                const catResponse = await axios.get('https://api.thecatapi.com/v1/images/search?limit=8');
                console.log('Cat API response:', catResponse.data);

                const cats = catResponse.data.map((cat, index) => ({
                    id: `cat-${cat.id || index}`,
                    url: cat.url,
                    type: 'cat',
                    name: generateCatName(),
                    breed: cat.breeds && cat.breeds[0] ? cat.breeds[0].name : 'Domestic Shorthair',
                    description: generateCatDescription(cat.breeds && cat.breeds[0] ? cat.breeds[0] : null)
                }));

                const allPets = [...dogs, ...cats];
                console.log('All pets:', allPets);

                // Shuffle the array for variety
                const shuffledPets = allPets.sort(() => Math.random() - 0.5);
                setPets(shuffledPets);

            } catch (error) {
                console.error('Error fetching pets:', error);
                setError(`Failed to load pets: ${error.message}`);

                // Fallback: Use placeholder data if API fails
                const fallbackPets = [
                    {
                        id: 'dog-1',
                        url: 'https://images.dog.ceo/breeds/labrador/n02099712_100.jpg',
                        type: 'dog',
                        name: 'Buddy',
                        breed: 'Labrador Retriever',
                        description: 'Friendly and energetic companion who loves playing fetch.'
                    },
                    {
                        id: 'cat-1',
                        url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
                        type: 'cat',
                        name: 'Luna',
                        breed: 'Domestic Shorthair',
                        description: 'Playful and affectionate cat who enjoys sunny spots.'
                    },
                    {
                        id: 'dog-2',
                        url: 'https://images.dog.ceo/breeds/golden-retriever/1.jpg',
                        type: 'dog',
                        name: 'Max',
                        breed: 'Golden Retriever',
                        description: 'Gentle and loyal family dog who gets along with everyone.'
                    },
                    {
                        id: 'cat-2',
                        url: 'https://cdn2.thecatapi.com/images/9u1.jpg',
                        type: 'cat',
                        name: 'Bella',
                        breed: 'Siamese',
                        description: 'Talkative and intelligent cat who loves attention.'
                    },
                    {
                        id: 'dog-3',
                        url: 'https://images.dog.ceo/breeds/husky/n02110185_100.jpg',
                        type: 'dog',
                        name: 'Rocky',
                        breed: 'Siberian Husky',
                        description: 'Energetic and adventurous dog who loves cold weather.'
                    },
                    {
                        id: 'cat-3',
                        url: 'https://cdn2.thecatapi.com/images/MTY3NDcyMQ.jpg',
                        type: 'cat',
                        name: 'Oliver',
                        breed: 'Maine Coon',
                        description: 'Gentle giant who enjoys being around people.'
                    }
                ];
                setPets(fallbackPets);
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    // Filter pets based on selection
    const filteredPets = filter === 'all'
        ? pets
        : pets.filter(pet => pet.type === filter);

    // Get counts for dropdown display
    const allCount = pets.length;
    const dogCount = pets.filter(pet => pet.type === 'dog').length;
    const catCount = pets.filter(pet => pet.type === 'cat').length;

    if (loading) {
        return (
            <div className="gallery-page">
                <div className="container">
                    <div className="page-header">
                        <h1>Pet Gallery</h1>
                        <p>Loading our adorable pets...</p>
                    </div>
                    <div className="loading-state">
                        <div className="loading-icon">🐾</div>
                        <p>Fetching the cutest pets for you...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="gallery-page">
            <div className="container">
                <div className="page-header">
                    <h1>Meet Our Adorable Pets</h1>
                    <p>These beautiful animals are looking for their forever homes</p>
                </div>

                {error && (
                    <div className="error-banner">
                        <strong>Note:</strong> {error} Using sample data.
                    </div>
                )}

                {/* Main Content with Sidebar Filter */}
                <div className="gallery-layout">
                    {/* Sidebar Filter */}
                    <div className="filter-sidebar">
                        <h3 className="filter-title">
                            Filter Pets
                        </h3>

                        <div className="filter-group">
                            <label className="filter-label">
                                Pet Type:
                            </label>
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

                    {/* Pets Grid */}
                    <div className="gallery-content">
                        {/* Results Header */}
                        <div className="results-header">
                            <h3 className="results-title">
                                {filter === 'all' && `All Pets (${allCount})`}
                                {filter === 'dog' && `Dogs (${dogCount})`}
                                {filter === 'cat' && `Cats (${catCount})`}
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
                                        <img
                                            src={pet.url}
                                            alt={`${pet.name} the ${pet.breed}`}
                                            onError={(e) => {
                                                console.error('Image failed to load:', pet.url);
                                                e.target.src = `https://via.placeholder.com/300x200/2c5530/white?text=${pet.type.toUpperCase()}+${pet.name}`;
                                            }}
                                        />
                                    </div>
                                    <div className="pet-info">
                                        <h4 className="pet-name">{pet.name}</h4>
                                        <p className="pet-breed">{pet.breed}</p>
                                        <p className="pet-description">{pet.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredPets.length === 0 && !loading && (
                            <div className="no-pets-message">
                                <h3>No pets found for "{filter}"</h3>
                                <p>Try selecting "All Pets" from the filter.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;