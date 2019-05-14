// ThreeColumns.js
import React from 'react';

class ThreeColumns extends React.Component {
  render() {
    return (
      <section class="wrapper style1 container special">
        <div class="row">
          <div class="col-4 col-12-narrower">

            <section>
              <span class="icon featured fa-briefcase"></span>
              <header>
                <h3>Business Team</h3>
              </header>
              <p>
                This team works on the financial side of the project by
                contacting potential sponsors and corporations to make sure
                that there are enough resources to actually build the car.
              </p>
            </section>

          </div>
          <div class="col-4 col-12-narrower">

            <section>
              <span class="icon featured fa-cogs"></span>
              <header>
                <h3>Mechanical Team</h3>
              </header>
              <p>
                Under the mechanical lead, this team is responsible for
                designing and building all mechanical aspects of the car such
                as the chassis, suspension, body and frame. The team uses CAD
                softwares to design and test their parts and build the entire
                vehicle from scratch.
              </p>
            </section>

          </div>
          <div class="col-4 col-12-narrower">

            <section>
              <span class="icon featured fa-bolt"></span>
              <header>
                <h3>Electrical Team</h3>
              </header>
              <p>
                Under the electrical lead, this team designs and implements
                all electronic aspects of the car such as the solar array, the
                battery pack, telemetry and controls that make sure the car runs
                smoothly. Members use simulation software as well as prototyping
                to test their designs and do everything that is necessary to
                power the car with solar energy.
              </p>
            </section>

          </div>
        </div>
      </section>
    );
  }
}

export default ThreeColumns;