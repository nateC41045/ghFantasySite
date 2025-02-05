import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1>My Website</h1>
            <nav>
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/rankings">Rankings</Link></li>  {/* Keep Rankings Link */}
                    <li><Link to ="/positional-rankings">Positional Rankings</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;