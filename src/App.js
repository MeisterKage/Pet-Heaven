import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PetsList from './pages/PetsList';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Gallery from './pages/Gallery';
import SignUp from './pages/SignUp';
import Form from './pages/Form';
import ReleasePetForm from './pages/ReleasePetForm';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check login status on app load
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const loggedIn = localStorage.getItem('petHeavenIsLoggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('petHeavenCurrentUser') || 'null');
    setIsLoggedIn(loggedIn);
    setCurrentUser(user);
  };

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('petHeavenIsLoggedIn');
    localStorage.removeItem('petHeavenCurrentUser');
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
    alert('Form submitted successfully! We will contact you soon.');
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<PetsList />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/adopt" element={<Form onSubmit={handleFormSubmit} />} />
            <Route path="/release" element={<ReleasePetForm />} />
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;