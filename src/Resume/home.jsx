import React from 'react';
import './home.css';
import hero from './hero.svg';

const Header = () => {
    return (
        <main className="header-container" id='home'>
            <div className="header-stack">
                {/* Left Section */}
                <div className="header-content">
                    <h1 className="header-title">
                        If You Want To Get Gaining, Get A Resume
                    </h1>
                    <p className="header-description">
                        Resumegen is a tool that often constitutes an automated process in which 
                        you follow a template and input your information. Ability to build, print, 
                        and download your resume for free in minutes.
                    </p>
                    <div className="header-buttons">
                        <a href="#builder" className="header-button">Build Resume</a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="header-image-container">
                    <img 
                        src={hero} 
                        alt="Hero Illustration" 
                        className="header-image" 
                        draggable="false" 
                    />
                </div>
            </div>
        </main>
    );
};

export default Header;
