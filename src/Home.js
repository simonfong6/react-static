// Home.js
import React from 'react';
import Banner from './subcomponents/Banner.js';
import FirstSection from './subcomponents/FirstSection.js';
import ThreeColumns from './subcomponents/ThreeColumns.js';

class Home extends React.Component {
  render() {
    return (
    <div id="page-wrapper">

      <Banner />

      <article id="main">
        <FirstSection />
        <ThreeColumns />
      </article>


    </div>);
  }
}

export default Home;