import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import Gallery from '../components/Cart';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="App">
      <div className="header-nav">
        <Logo />
        <Navigation />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
