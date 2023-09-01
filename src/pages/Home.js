import React from 'react';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className="App">
      <Layout>
        <Banner />
        <Gallery />
      </Layout>
    </div>
  );
};

export default Home;
