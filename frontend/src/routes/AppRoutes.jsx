import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageTransition from '../components/animations/PageTransition';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Manufacturing from '../pages/Manufacturing';
import Compliance from '../pages/Compliance';
import Projects from '../pages/Projects';
import Safety from '../pages/Safety';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="about" element={<PageTransition><About /></PageTransition>} />
          <Route path="vision-mission" element={<PageTransition><About section="vision" /></PageTransition>} />
          <Route path="business-objectives" element={<PageTransition><About section="objectives" /></PageTransition>} />
          <Route path="compliance" element={<PageTransition><Compliance /></PageTransition>} />
          <Route path="safety-sustainability" element={<PageTransition><Safety /></PageTransition>} />
          <Route path="partner-brands" element={<PageTransition><About section="partners" /></PageTransition>} />
          <Route path="solutions" element={<PageTransition><Services /></PageTransition>} />
          <Route path="solutions/:solutionSlug" element={<PageTransition><Services /></PageTransition>} />
          <Route path="services" element={<Navigate replace to="/solutions" />} />
          <Route path="capabilities" element={<PageTransition><Manufacturing /></PageTransition>} />
          <Route path="capabilities/:capabilitySlug" element={<PageTransition><Manufacturing /></PageTransition>} />
          <Route path="manufacturing" element={<Navigate replace to="/capabilities" />} />
          <Route path="projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="projects/:projectSlug" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="safety" element={<Navigate replace to="/safety-sustainability" />} />
          <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
