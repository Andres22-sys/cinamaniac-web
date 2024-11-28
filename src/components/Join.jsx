import './Join.css';

function Join() {
    return (
        <section id="join" className="join-section">
            <h2>Join Our Club</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name" /* Added autocomplete attribute */
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email" /* Added autocomplete attribute */
                    required
                />

                <button type="submit">Join Now</button>
            </form>
        </section>
    );
}

export default Join;
