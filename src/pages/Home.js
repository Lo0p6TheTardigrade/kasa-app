import React from 'react';

import Section from '../components/Section';
import Gallery from '../components/Gallery';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div className="App">
      <Layout>
        <Section />
        <Gallery />
      </Layout>
      {/* <Header />
      <Section />
      <Gallery />
      <Footer /> */}
    </div>
  );
};

export default Home;
