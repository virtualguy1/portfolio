import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router";
import { AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "./constants";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { BlogList } from "./components/BlogList";
import { BlogPost } from "./components/BlogPost";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home data={PORTFOLIO_DATA} />} />
        <Route
          path="/projects"
          element={<Projects projects={PORTFOLIO_DATA.projects} />}
        />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-tui-bg text-tui-fg selection:bg-tui-cyan selection:text-tui-bg font-mono px-4 md:px-8 lg:px-0">
        <div className="max-w-[800px] mx-auto">
          <Header links={PORTFOLIO_DATA.navLinks} />

          <AnimatedRoutes />

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
