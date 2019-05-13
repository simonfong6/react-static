// Home.js
import React from 'react';
import Navbar from './subcomponents/Navbar.js';
import Banner from './subcomponents/Banner.js';
import Footer from './subcomponents/Footer.js';
import FirstSection from './subcomponents/FirstSection.js';
import IconSection from './subcomponents/IconSection.js';
import ThreeColumns from './subcomponents/ThreeColumns.js';
import CoolStuff from './subcomponents/CoolStuff.js';
import Ready from './subcomponents/Ready.js';
import './assets/css/main.css';

class Home extends React.Component {
  render() {
    return (
    <div id="page-wrapper">
      <Navbar />
      <Banner />

      <article id="main">
        <FirstSection />
        <IconSection />
        <ThreeColumns />
        <CoolStuff />
      </article>

      <Ready />
      <Footer />
    </div>);
  }
}

export default Home;