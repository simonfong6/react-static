// Home.js
import React from 'react';
import Navbar from './subcomponents/Navbar.js';
import Banner from './subcomponents/Banner.js';
import Footer from './subcomponents/Footer.js';
import FirstSection from './subcomponents/FirstSection.js';
import ThreeColumns from './subcomponents/ThreeColumns.js';
import './assets/css/main.css';

class Home extends React.Component {
  render() {
    return (
    <div id="page-wrapper">
      <Navbar />
      <Banner />

      <article id="main">
        <FirstSection />
        <ThreeColumns />
      </article>

      <Footer />
    </div>);
  }
}

export default Home;