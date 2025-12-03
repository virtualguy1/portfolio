import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PORTFOLIO_DATA } from './constants';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Projects } from './components/Projects';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-terminal-bg text-terminal-text selection:bg-terminal-green selection:text-black font-sans px-6 md:px-12 lg:px-0">
        <div className="max-w-[700px] mx-auto">
          <Header links={PORTFOLIO_DATA.navLinks} />

          <Routes>
            <Route path="/" element={<Home data={PORTFOLIO_DATA} />} />
            <Route path="/projects" element={<Projects projects={PORTFOLIO_DATA.projects} />} />
          </Routes>

          <Footer
            links={PORTFOLIO_DATA.socials}
            copyrightName={PORTFOLIO_DATA.name}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;