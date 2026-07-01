import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
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

const routeFlow = [
  '/',
  '/about',
  '/vision-mission',
  '/business-objectives',
  '/compliance',
  '/safety-sustainability',
  '/partner-brands',
  '/solutions',
  '/capabilities',
  '/projects',
  '/contact',
];

function getRouteFlowIndex(pathname) {
  if (pathname.startsWith('/solutions/')) {
    return routeFlow.indexOf('/solutions');
  }

  if (pathname.startsWith('/capabilities/')) {
    return routeFlow.indexOf('/capabilities');
  }

  if (pathname.startsWith('/projects/')) {
    return routeFlow.indexOf('/projects');
  }

  const exactIndex = routeFlow.indexOf(pathname);
  return exactIndex === -1 ? routeFlow.length : exactIndex;
}

export default function AppRoutes() {
  const location = useLocation();
  const currentFlowIndex = getRouteFlowIndex(location.pathname);
  const previousFlowIndex = useRef(currentFlowIndex);
  const direction = currentFlowIndex >= previousFlowIndex.current ? 1 : -1;

  useEffect(() => {
    previousFlowIndex.current = currentFlowIndex;
  }, [currentFlowIndex]);

  return (
    <Layout>
      <AnimatePresence custom={direction} initial={false} mode="sync">
        <Routes location={location} key={location.pathname}>
          <Route index element={<PageTransition direction={direction}><Home /></PageTransition>} />
          <Route path="about" element={<PageTransition direction={direction}><About /></PageTransition>} />
          <Route path="vision-mission" element={<PageTransition direction={direction}><About section="vision" /></PageTransition>} />
          <Route path="business-objectives" element={<PageTransition direction={direction}><About section="objectives" /></PageTransition>} />
          <Route path="compliance" element={<PageTransition direction={direction}><Compliance /></PageTransition>} />
          <Route path="safety-sustainability" element={<PageTransition direction={direction}><Safety /></PageTransition>} />
          <Route path="partner-brands" element={<PageTransition direction={direction}><About section="partners" /></PageTransition>} />
          <Route path="solutions" element={<PageTransition direction={direction}><Services /></PageTransition>} />
          <Route path="solutions/:solutionSlug" element={<PageTransition direction={direction}><Services /></PageTransition>} />
          <Route path="services" element={<Navigate replace to="/solutions" />} />
          <Route path="capabilities" element={<PageTransition direction={direction}><Manufacturing /></PageTransition>} />
          <Route path="capabilities/:capabilitySlug" element={<PageTransition direction={direction}><Manufacturing /></PageTransition>} />
          <Route path="manufacturing" element={<Navigate replace to="/capabilities" />} />
          <Route path="projects" element={<PageTransition direction={direction}><Projects /></PageTransition>} />
          <Route path="projects/:projectSlug" element={<PageTransition direction={direction}><Projects /></PageTransition>} />
          <Route path="safety" element={<Navigate replace to="/safety-sustainability" />} />
          <Route path="contact" element={<PageTransition direction={direction}><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition direction={direction}><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
