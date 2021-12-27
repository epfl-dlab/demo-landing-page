import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const App: React.FC = () => {
    return (
        <div id="top" className={'light app'}>
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default App;
