import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import logo from '/src/assets/cinemaniacs-logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navigationLinks = [
        { id: 1, href: "#about", label: "About" },
        { id: 2, href: "#reviews", label: "Reviews" },
        { id: 3, href: "#join", label: "Join" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="header-content">
                <a href="#hero" className="header-logo">
                    <img src={logo} alt="Cinemaniacs Club logo" />
                </a>
                <span className="header-title">Cinemaniacs Club</span>
                <button
                    className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav>
                    <ul className={menuOpen ? 'active' : ''}>
                        {navigationLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
                            </li>
                        ))}
                        <li className="nav-cta">
                            <a href="#join" className="btn-nav" onClick={handleLinkClick}>Join Now</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
