import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VoiceflowBot from './components/VoiceflowBot';

// Import all pages
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Services from './pages/Services';
import CoreServices from './pages/services/CoreServices';
import AddOns from './pages/services/AddOns';
import Bundles from './pages/services/Bundles';
import CustomProjects from './pages/services/CustomProjects';
import About from './pages/About';
import Contact from './pages/Contact';
import LeadGeneration from './pages/LeadGeneration';
import Industries from './pages/Industries';
import Testimonials from './pages/Testimonials';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Pricing from './pages/Pricing';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <>
      <ScrollToTop />
      {location.pathname !== '/landing-page' && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
          <Navigation />
        </header>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/core" element={<CoreServices />} />
          <Route path="/services/add-ons" element={<AddOns />} />
          <Route path="/services/bundles" element={<Bundles />} />
          <Route path="/services/custom" element={<CustomProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/lead-generation" element={<LeadGeneration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </main>
      {location.pathname !== '/landing-page' && <Footer />}
      <VoiceflowBot />
    </>
  );
}

export default App;