import { Link } from 'react-router-dom';
import { X, Camera, Clapperboard } from 'lucide-react';
import './Footer.css';
import logo from '/src/assets/cinemaniacs-logo.png';

function Footer() {
    const clubLinks = [
        { label: "About", href: "/#about" },
        { label: "Reviews", href: "/#reviews" },
        { label: "Join", href: "/#join" },
    ];

    const legalLinks = [
        { label: "Privacy Policy", to: "/privacy-policy" },
        { label: "Terms of Service", to: "/terms" },
        { label: "Cookie Policy", to: "/cookie-policy" },
    ];

    const social = [
        { label: "Twitter / X", href: "#", icon: X },
        { label: "Instagram", href: "#", icon: Camera },
        { label: "Letterboxd", href: "#", icon: Clapperboard },
    ];

    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-brand">
                    <img src={logo} alt="Cinemaniacs Club logo" />
                    <p>A home for passionate film lovers — reviews, discussions, and community.</p>
                    <div className="footer-social">
                        {social.map((s) => {
                            const Icon = s.icon;
                            return (
                                <a key={s.label} href={s.href} aria-label={s.label} className="social-link">
                                    <Icon size={16} strokeWidth={1.75} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Club</h4>
                    <ul>
                        {clubLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        {legalLinks.map((item) => (
                            <li key={item.label}>
                                <Link to={item.to}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Cinemaniacs Club. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
