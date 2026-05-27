import { Routes, Route } from 'react-router-dom';
import Header from './navigation/Header';
import Footer from './navigation/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Join from './components/Join';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import './index.css';

function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Reviews />
            <Join />
        </main>
    );
}

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
