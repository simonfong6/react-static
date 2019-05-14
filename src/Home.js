// Home.js
import React from 'react';
import Banner from './subcomponents/Banner.js';
import FirstSection from './subcomponents/FirstSection.js';
import ThreeColumns from './subcomponents/ThreeColumns.js';

class Home extends React.Component {
  render() {
    return (
    <div id="page-wrapper">

      <Banner 
        title="UCSD Solar Car"
        lineOne="Welcome!"
        lineTwo="Engineers for a Sustainable World"
        button={true}
      />

      <article id="main">
        <FirstSection />
        <ThreeColumns 
          leftTitle="Business Team"
          leftIcon="briefcase"
          leftPara="
            This team works on the financial side of the project by
            contacting potential sponsors and corporations to make sure
            that there are enough resources to actually build the car.
          "
          middleTitle="Mechanical Team"
          middleIcon="cogs"
          middlePara="
            Under the mechanical lead, this team is responsible for
            designing and building all mechanical aspects of the car such
            as the chassis, suspension, body and frame. The team uses CAD
            softwares to design and test their parts and build the entire
            vehicle from scratch.
          "
          rightTitle="Electrical Team"
          rightIcon="bolt"
          rightPara="
            Under the electrical lead, this team designs and implements
            all electronic aspects of the car such as the solar array, the
            battery pack, telemetry and controls that make sure the car runs
            smoothly. Members use simulation software as well as prototyping
            to test their designs and do everything that is necessary to
            power the car with solar energy.
          "
        />
      </article>


    </div>);
  }
}

export default Home;