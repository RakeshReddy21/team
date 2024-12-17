import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <header className="navbar-container">
            <div className="navbar-flex">
                <h2 className="navbar-logo">Resumegen</h2>
                <nav className="navbar-links">
                    <a href="#home" className="navbar-link">Home</a>
                    <a href="#a" className="navbar-link">Templates</a>
                    <a href="#a" className="navbar-link">About</a>
                    <button className="navbar-button">Contact</button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
