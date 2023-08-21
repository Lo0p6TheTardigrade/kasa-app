import React from 'react';

import Section from '../components/Section';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div className="App">
      <Layout>
        <Section />
        <Gallery />
      </Layout>
    </div>
  );
};

export default Home;
