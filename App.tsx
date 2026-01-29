
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Interest from './components/Interest';
import Promotions from './components/Promotions';
import Desire from './components/Desire';
import Action from './components/Action';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Interest />
        <Promotions />
        <Desire />
        <Action />
      </main>
      <Footer />
    </div>
  );
};

export default App;
