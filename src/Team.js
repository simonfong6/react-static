// Team.js
import React from 'react';
import Banner from './subcomponents/Banner';
import NoSideBar from './subcomponents/NoSideBar';
import ThreeColumns from './subcomponents/ThreeColumns';

class Team extends React.Component {
  render() {
    return (
      <div id="page-wrapper">
        <Banner 
          title="Team"
        />
        <article id="main">
          <NoSideBar
            title="The Roster"
            paraOne="
              The UCSD Solar Car Team has its roots firmly planted by a spirit
              of excellence through diversity. With a variety of students from
              contrasting educational as well as cultural backgrounds, every
              member is equally responsible for the team's success. Supervising
              them are the team leads, who go the extra step to bring out the
              best in every one of them."
            paraTwo=""
            paraThree=""
          />
          <ThreeColumns 
          leftTitle="Project Lead:  Shane Keegan"
          leftIcon="briefcase"
          leftPara="
          Class of 2018 | Electrical Engineering |
          Shane is a 4th year electrical engineering student planning on
          focusing on power engineering. As Project Lead, Shane must ensure that
          all benchmarks must be reached before their deadlines, as well as
          ensure that each team is organized and on schedule. His
          responsibilities to the team include managing team outreach and
          communications, and contributing to electrical design. His two
          favorite things are good coffee and good music.
          "
          middleTitle="Mechanical Lead: Casey Fitzpatrick"
          middleIcon="cogs"
          middlePara="
          Class of 2018 | Aerospace Engineering

          Casey leads the mechanical team to work on the aerodynamic design of
          the body and Finite Element Analysis of the vehicle. Additionally, his
          background in carpentry has helped coordinate the production of the
          body of the car. In the time spent outside of his studies you can find
          Casey on the trails backpacking or cruising around on his skateboard.
          "
          rightTitle="Electrical Lead: Noah Chung"
          rightIcon="bolt"
          rightPara="
          Class of 2018 | Electrical Engineering |

          Noah Chung is a 4th year Electrical engineering student at UCSD. As
          electrical lead, Noah ensures that the electrical system for the
          vehicle is thoroughly completed with the work of each electrical team
          member. Noah sought out the Solar Car Project to grasp a deeper
          understanding of the solar vehicle building process but more
          importantly to learn about implementing renewable energy sources like
          solar energy.
          "
        />
        <ThreeColumns 
          leftTitle="Operations Team"
          leftIcon="briefcase"
          leftPara="
            Shane Keegan, Anthony Flores, Christopher Wiggins, Dave Lightfoot
          "
          middleTitle="Mechanical Team"
          middleIcon="cogs"
          middlePara="
            Casey Fitzpatrick, Angela Yu, Sukhdeep Chera, Roy Choi, Jasmine Ng,
            Kieu Huynh, Trevor Harman, Iva Robb, Nariyan Okuma
          "
          rightTitle="Electrical Team"
          rightIcon="bolt"
          rightPara="
            Noah Chung, Philman Tjong, Oscar Shaw, Eric Brown, Aditya Mangharam,
            Andrew Betts, Charles Elliot
          "
        />
        </article>


      </div>
    );
  }
}

export default Team;