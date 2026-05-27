import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './LegalPage.css';

function TermsOfService() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <Link to="/" className="legal-back">
                    <ArrowLeft size={15} strokeWidth={2} />
                    Back to home
                </Link>

                <p className="legal-eyebrow">Legal</p>
                <h1>Terms of Service</h1>
                <p className="legal-meta">Last updated: January 1, 2025</p>

                <div className="legal-body">
                    <section>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the Cinemaniacs Club website ("Service"), you agree to
                            be bound by these Terms of Service ("Terms"). If you do not agree to these
                            Terms, please do not use our Service.
                        </p>
                        <p>
                            We reserve the right to update these Terms at any time. Your continued use
                            of the Service after any changes constitutes acceptance of the revised Terms.
                        </p>
                    </section>

                    <section>
                        <h2>2. Use of the Service</h2>
                        <p>You agree to use the Service only for lawful purposes and in a way that does not:</p>
                        <ul>
                            <li>Infringe the rights of others or restrict their use of the Service.</li>
                            <li>Transmit unsolicited commercial communications or spam.</li>
                            <li>Upload or distribute malicious code, viruses, or harmful content.</li>
                            <li>Attempt to gain unauthorised access to any part of the Service or its systems.</li>
                            <li>Impersonate any person or entity, or misrepresent your affiliation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Membership</h2>
                        <p>
                            Membership to Cinemaniacs Club is free. When you register, you agree to
                            provide accurate and complete information. You are responsible for maintaining
                            the confidentiality of any account credentials and for all activities that
                            occur under your account.
                        </p>
                        <p>
                            We reserve the right to suspend or terminate your membership at our discretion
                            if you violate these Terms or engage in conduct we deem harmful to the community.
                        </p>
                    </section>

                    <section>
                        <h2>4. Intellectual Property</h2>
                        <p>
                            All content on the Cinemaniacs Club website — including text, graphics, logos,
                            and images — is the property of Cinemaniacs Club or its content suppliers and
                            is protected by applicable intellectual property laws.
                        </p>
                        <p>
                            You may not reproduce, distribute, or create derivative works from our content
                            without our express written permission, except for personal, non-commercial use.
                        </p>
                    </section>

                    <section>
                        <h2>5. User-Submitted Content</h2>
                        <p>
                            By submitting content (comments, reviews, or other contributions) to our Service,
                            you grant Cinemaniacs Club a non-exclusive, royalty-free, worldwide licence to
                            use, display, and distribute that content in connection with the Service.
                        </p>
                        <p>
                            You represent that you have all rights necessary to grant this licence and that
                            your content does not violate any third-party rights.
                        </p>
                    </section>

                    <section>
                        <h2>6. Disclaimer of Warranties</h2>
                        <p>
                            The Service is provided "as is" and "as available" without warranties of any kind,
                            either express or implied. We do not warrant that the Service will be uninterrupted,
                            error-free, or free from viruses or other harmful components.
                        </p>
                    </section>

                    <section>
                        <h2>7. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Cinemaniacs Club shall not be liable for
                            any indirect, incidental, special, or consequential damages arising from your use
                            of, or inability to use, the Service — even if we have been advised of the
                            possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2>8. Governing Law</h2>
                        <p>
                            These Terms are governed by and construed in accordance with applicable laws.
                            Any disputes arising under these Terms shall be subject to the exclusive
                            jurisdiction of the competent courts.
                        </p>
                    </section>

                    <section>
                        <h2>9. Contact Us</h2>
                        <div className="legal-contact">
                            <p>
                                Questions about these Terms? Contact us at{' '}
                                <a href="mailto:hello@cinemaniacs.club">hello@cinemaniacs.club</a>.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default TermsOfService;
