import './About.css';

function About() {
    const stats = [
        { value: "500+", label: "Members" },
        { value: "200+", label: "Reviews" },
        { value: "50+", label: "Discussions" },
        { value: "3", label: "Years Active" },
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <p className="section-eyebrow">Who We Are</p>
                    <h2>A Club Built for Film Lovers</h2>
                    <p>
                        We are a passionate group of cinephiles united by a love for storytelling on screen.
                        Our goal is to deliver insightful, honest reviews and spark genuine conversations about
                        the films that move us.
                    </p>
                    <p>
                        Whether you're a casual viewer or a die-hard cinephile, you'll find your place here.
                        Join our community to discover new films, debate your favorites, and connect with
                        fellow movie enthusiasts from around the world.
                    </p>
                    <a href="#join" className="btn-primary about-cta">Become a Member</a>
                </div>
                <div className="about-stats">
                    {stats.map((stat) => (
                        <div className="stat-card" key={stat.label}>
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
