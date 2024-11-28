import React, { useState } from 'react';
import './Header.css';
import logo from '/src/assets/cinemaniacs-logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigationLinks = [
        { id: 1, href: "#about", label: "About" },
        { id: 2, href: "#reviews", label: "Reviews" },
        { id: 3, href: "#join", label: "Join" },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="header-content">
                <a href="#hero">
                    <img src={logo} alt="Cinemaniacs Club logo" />
                </a>
                <h1>Cinemaniacs Club</h1>
                <button
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
                <nav>
                    <ul className={menuOpen ? 'active' : ''}>
                        {navigationLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
