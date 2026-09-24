/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  const [selectedServiceInquiry, setSelectedServiceInquiry] = useState<string>('');

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedServiceInquiry(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080A0B] text-white selection:bg-white selection:text-[#080A0B] overflow-x-hidden font-sans">
      {/* Fixed / Sticky Navigation Bar */}
      <Navbar />

      {/* Main One-Page Content Sections */}
      <main>
        {/* 1. Home / Hero Section (90-100vh) */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services onSelectServiceForContact={handleSelectServiceForContact} />

        {/* 4. Contact Section */}
        <Contact initialServiceInquiry={selectedServiceInquiry} />
      </main>

      {/* 5. Minimal Footer */}
      <Footer />
    </div>
  );
}
