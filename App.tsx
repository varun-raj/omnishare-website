import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Providers } from './components/Providers';
import { Users } from './components/Users';
import { Footer } from './components/Footer';
import { AndroidCTA } from './components/AndroidCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-brand-500/20 selection:text-brand-700">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Providers />
        <Users />
        <AndroidCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;