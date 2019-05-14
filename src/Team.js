// Team.js
import React from 'react';
import Banner from './subcomponents/Banner';
import FirstSection from './subcomponents/FirstSection';
import ThreeColumns from './subcomponents/ThreeColumns';

class Team extends React.Component {
  render() {
    return (
      <div id="page-wrapper">
        <Banner 
          title="Team"
        />
        <article id="main">
          <FirstSection />
          <ThreeColumns />
        </article>


      </div>
    );
  }
}

export default Team;