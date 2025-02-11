
import React from "react";
import { Link, NavLink } from "react-router-dom";
import './index.css'; // Import the custom CSS file where you define the gradient




function Header() {
    return (
        <header className="custom-gradient-header shadow-lg rounded-b-2xl p-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                {/* Logo & Title */}
                <div className="flex items-center space-x-3">
                    <Link to="/">
                        <img
                            src={`${process.env.PUBLIC_URL}/logo192.png`}
                            alt="Fantasy Engine Logo"
                            className="w-36 h-36 rounded-full shadow-md"
                        />
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-wide text-green-7">
                        MATRIX FANTASY
                    </h1>
                </div>

                {/* Navigation Menu */}
                <nav>
                    <ul className="flex space-x-6 text-lg font-semibold">

                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/about" className="link">About</Link></li>
                        <li><Link to="/services" className="link">Services</Link></li>
                        <li><Link to="/contact" className="link">Contact</Link></li>
                        <li><Link to="/rankings" className="link">Rankings</Link></li>
                        <li><Link to="/positional-rankings" className="link">Positional Rankings</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

/*
function Header() {
    return (
        <header className="bg-gradient-to-r from-indigo-500 to-cyan-200 shadow-lg rounded-b-2xl p-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                
                <div className="flex items-center space-x-3">
                    <Link to="/">
                        <img
                            src={`${process.env.PUBLIC_URL}/logo192.png`}
                            alt="Fantasy Engine Logo"
                            className="w-24 h-24 rounded-full shadow-md"
                        />
                    </Link>
                    <h1 className="text-white text-4xl font-extrabold tracking-wide drop-shadow-lg font-title">
                        Fantasy Engine
                    </h1>
                </div>

                <nav>
                    <ul className="flex space-x-6 text-lg font-semibold">
                        <li><Link to="/" className="text-white hover:text-yellow-300 transition">Home</Link></li>
                        <li><Link to="/about" className="text-white hover:text-yellow-300 transition">About</Link></li>
                        <li><Link to="/services" className="text-white hover:text-yellow-300 transition">Services</Link></li>
                        <li><Link to="/contact" className="text-white hover:text-yellow-300 transition">Contact</Link></li>
                        <li><Link to="/rankings" className="text-white hover:text-yellow-300 transition">Rankings</Link></li>
                        <li><Link to="/positional-rankings" className="text-white hover:text-yellow-300 transition">Positional Rankings</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;
*/


/*
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Fantasy Engine Logo" className="logo" />
                </Link>
                <h1>Fantasy Engine</h1>
            </div>
            <nav>
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/rankings">Rankings</Link></li>
                    <li><Link to="/positional-rankings">Positional Rankings</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; */