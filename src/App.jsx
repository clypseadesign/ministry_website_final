import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import UnitsInitiatives from './pages/UnitsInitiatives';
import MediaResources from './pages/MediaResources';
import GetInvolved from './pages/GetInvolved';
import DonateUs from './pages/DonateUs';
import ContactUs from './pages/ContactUs';
import TransparencyLegal from './pages/TransparencyLegal';
import PersonalGratitude from './pages/PersonalGratitude';
import PaymentSuccessful from './pages/PaymentSuccessful';
import TestAssets from './pages/TestAssets';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1, background: '#ffffff' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/units-initiatives" element={<UnitsInitiatives />} />
          <Route path="/media-resources" element={<MediaResources />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate-us" element={<DonateUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/transparency-legal" element={<TransparencyLegal />} />
          <Route path="/gratitude" element={<PersonalGratitude />} />
          <Route path="/payment-successful" element={<PaymentSuccessful />} />
          <Route path="/test-assets" element={<TestAssets />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
