import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './LegalPage.css';

function PrivacyPolicy() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <Link to="/" className="legal-back">
                    <ArrowLeft size={15} strokeWidth={2} />
                    Back to home
                </Link>

                <p className="legal-eyebrow">Legal</p>
                <h1>Privacy Policy</h1>
                <p className="legal-meta">Last updated: January 1, 2025</p>

                <div className="legal-body">
                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to Cinemaniacs Club ("we," "us," or "our"). We are committed to protecting
                            your personal information and your right to privacy. This Privacy Policy explains
                            how we collect, use, and share information about you when you use our website and
                            services.
                        </p>
                        <p>
                            By using our website, you agree to the collection and use of information in
                            accordance with this policy. If you have any questions, please contact us at
                            the details provided below.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>We collect information you provide directly to us, including:</p>
                        <ul>
                            <li>Your name and email address when you join our club.</li>
                            <li>Any content you submit, such as comments or reviews.</li>
                            <li>Communications you send us directly.</li>
                        </ul>
                        <p>
                            We also automatically collect certain information when you visit our site,
                            such as your IP address, browser type, referring URLs, and pages visited.
                            This data is used solely to improve site performance and user experience.
                        </p>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Send you our newsletter, weekly movie picks, and club updates.</li>
                            <li>Respond to your comments, questions, and requests.</li>
                            <li>Monitor and analyze usage patterns to improve our website.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>
                        <p>
                            We will never sell your personal data to third parties. Your information
                            is used exclusively to operate and improve Cinemaniacs Club.
                        </p>
                    </section>

                    <section>
                        <h2>4. Cookies</h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your experience.
                            You can instruct your browser to refuse all cookies or to indicate when a
                            cookie is being sent. For full details, please review our{' '}
                            <Link to="/cookie-policy">Cookie Policy</Link>.
                        </p>
                    </section>

                    <section>
                        <h2>5. Data Retention</h2>
                        <p>
                            We retain your personal data only for as long as necessary to provide our
                            services and fulfil the purposes outlined in this policy. If you wish to
                            delete your data, please contact us and we will process your request within
                            30 days.
                        </p>
                    </section>

                    <section>
                        <h2>6. Your Rights</h2>
                        <p>Depending on your location, you may have the right to:</p>
                        <ul>
                            <li>Access the personal data we hold about you.</li>
                            <li>Request correction of inaccurate data.</li>
                            <li>Request deletion of your data ("right to be forgotten").</li>
                            <li>Object to or restrict the processing of your data.</li>
                            <li>Data portability — receive a copy of your data in a portable format.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>7. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of
                            any significant changes by posting the new policy on this page and updating
                            the "Last updated" date above.
                        </p>
                    </section>

                    <section>
                        <h2>8. Contact Us</h2>
                        <div className="legal-contact">
                            <p>
                                If you have any questions about this Privacy Policy, please reach out to us at{' '}
                                <a href="mailto:hello@cinemaniacs.club">hello@cinemaniacs.club</a>.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
