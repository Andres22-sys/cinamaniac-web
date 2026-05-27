import { ChevronDown } from 'lucide-react';
import './Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-overlay" />
            <div className="hero-content">
                <p className="hero-eyebrow">Welcome to Cinemaniacs Club</p>
                <h1 className="hero-headline">
                    Discover the Best<br />
                    <span className="hero-accent">Movies</span> With Us
                </h1>
                <p className="hero-sub">
                    Honest reviews, passionate discussions, and a community of film lovers — all in one place.
                </p>
                <div className="hero-actions">
                    <a href="#join" className="btn-primary">Join Now</a>
                    <a href="#reviews" className="btn-ghost">See Reviews</a>
                </div>
            </div>
            <a href="#about" className="hero-scroll" aria-label="Scroll down">
                <ChevronDown size={32} strokeWidth={1.5} />
            </a>
        </section>
    );
}

export default Hero;
