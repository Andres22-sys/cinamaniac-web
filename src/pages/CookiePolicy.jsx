import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './LegalPage.css';

function CookiePolicy() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <Link to="/" className="legal-back">
                    <ArrowLeft size={15} strokeWidth={2} />
                    Back to home
                </Link>

                <p className="legal-eyebrow">Legal</p>
                <h1>Cookie Policy</h1>
                <p className="legal-meta">Last updated: January 1, 2025</p>

                <div className="legal-body">
                    <section>
                        <h2>1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files placed on your device when you visit a website.
                            They allow the site to recognise your device and remember certain information
                            about your visit, such as your preferences and past actions.
                        </p>
                    </section>

                    <section>
                        <h2>2. How We Use Cookies</h2>
                        <p>Cinemaniacs Club uses cookies to:</p>
                        <ul>
                            <li>Keep you signed in across pages during a session.</li>
                            <li>Remember your preferences (e.g., display settings).</li>
                            <li>Understand how visitors interact with our website via analytics.</li>
                            <li>Improve the overall performance and user experience of the site.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Types of Cookies We Use</h2>
                        <p><strong style={{color: 'var(--color-white)'}}>Essential Cookies</strong></p>
                        <p>
                            These are required for the website to function properly. Without them,
                            services like user authentication and form submission would not work.
                            You cannot opt out of essential cookies.
                        </p>
                        <p><strong style={{color: 'var(--color-white)'}}>Analytics Cookies</strong></p>
                        <p>
                            These help us understand how visitors use our site — which pages are most
                            visited, how long users stay, and where they come from. All data is
                            aggregated and anonymised. We use this to improve our content and experience.
                        </p>
                        <p><strong style={{color: 'var(--color-white)'}}>Preference Cookies</strong></p>
                        <p>
                            These remember choices you make to personalise your experience, such as
                            your preferred language or region.
                        </p>
                    </section>

                    <section>
                        <h2>4. Third-Party Cookies</h2>
                        <p>
                            We may use trusted third-party services that also set cookies on your device.
                            These services have their own privacy and cookie policies, which we encourage
                            you to review. We do not control third-party cookies.
                        </p>
                    </section>

                    <section>
                        <h2>5. Managing Cookies</h2>
                        <p>
                            You can control and delete cookies through your browser settings. Most browsers
                            allow you to refuse new cookies, delete existing ones, or be notified when a
                            new cookie is set. Refer to your browser's help documentation for instructions.
                        </p>
                        <p>
                            Please note that disabling certain cookies may affect the functionality of
                            our website. Essential cookies cannot be disabled without impacting core features.
                        </p>
                    </section>

                    <section>
                        <h2>6. Changes to This Policy</h2>
                        <p>
                            We may update this Cookie Policy occasionally. Any changes will be posted on
                            this page with a revised "Last updated" date. We encourage you to review this
                            policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2>7. Contact Us</h2>
                        <div className="legal-contact">
                            <p>
                                If you have questions about our use of cookies, please contact us at{' '}
                                <a href="mailto:hello@cinemaniacs.club">hello@cinemaniacs.club</a>.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default CookiePolicy;
