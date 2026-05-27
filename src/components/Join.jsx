import { Film, MessageCircle, Star, Ticket } from 'lucide-react';
import './Join.css';

function Join() {
    const benefits = [
        { icon: Film, title: "Weekly Picks", desc: "Get curated movie recommendations every week." },
        { icon: MessageCircle, title: "Community Discussions", desc: "Join live debates and threads with fellow film lovers." },
        { icon: Star, title: "Exclusive Reviews", desc: "Access in-depth reviews before they go public." },
        { icon: Ticket, title: "Event Invites", desc: "Get invited to watch parties and screening events." },
    ];

    return (
        <section id="join" className="join-section">
            <div className="join-container">
                <div className="join-benefits">
                    <p className="section-eyebrow">Why Join?</p>
                    <h2>Become Part of Our Community</h2>
                    <ul className="benefits-list">
                        {benefits.map((b) => {
                            const Icon = b.icon;
                            return (
                                <li key={b.title} className="benefit-item">
                                    <span className="benefit-icon">
                                        <Icon size={20} strokeWidth={1.75} />
                                    </span>
                                    <div>
                                        <strong>{b.title}</strong>
                                        <p>{b.desc}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="join-form-wrap">
                    <h3>Join for Free</h3>
                    <p className="join-sub">No credit card required. Cancel anytime.</p>
                    <form className="join-form">
                        <div className="field-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Jane Doe"
                                autoComplete="name"
                                required
                            />
                        </div>
                        <div className="field-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="jane@example.com"
                                autoComplete="email"
                                required
                            />
                        </div>
                        <button type="submit" className="join-submit">Join Now</button>
                        <p className="join-disclaimer">
                            By joining you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Join;
