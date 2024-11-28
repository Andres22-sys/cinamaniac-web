import Header from './navigation/Header';
import Footer from './navigation/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Join from './components/Join';
import './index.css';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Reviews />
                <Join />
            </main>
            <Footer />
        </>
    );
}

export default App;
