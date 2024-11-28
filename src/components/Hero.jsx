import './Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero">
                <h2>Discover the best movies with us</h2>
                <p>We review the latest movies and share our thoughts with the community.</p>
                <a href="#join" className="btn">Join now</a>
            </div>
        </section>
    );
}

export default Hero;
