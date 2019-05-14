// FirstSection.js
import React from 'react';

class FirstSection extends React.Component {
  render() {
    return (
      <header class="special container">
        <span class="icon fa-bar-chart-o"></span>
        <h2>A Student Organization Dedicated to Excellence in Sustainable Engineering</h2>
        <p class="text-left my-3" >
          Established in the fall of 2015, UCSD's first Solar Car Team is an
          entirely student-run project that aims to design, build, test, and
          race solar powered vehicles. Comprised of over 20 students across a
          variety of disciplines and areas of study, we have come together to
          start a Solar Car program at UCSD, located in one of the sunniest
          cities in the world.
        </p>
        <p class="text-left my-3" >
          The Solar Car Project is the first of its kind in that it attracts a
          large variety of students from various engineering as well as
          non-engineering backgrounds. Participating in this project gives
          students the opportunity to gain hands-on experience with different
          fields of engineering (mechanical, engineering, aerospace, design) as
          well as experience in business, operations, and project management.
          Students in Triton Solar Car can stand out from the crowd by gaining
          important real-world experience and operating in an environment that
          prepares them for their careers by getting involved in setting
          deadlines, budgets, designs, reviews while doing their best to control
          all the unforeseen variables that may arise. 
        </p>
      </header>
    );
  }
}

export default FirstSection;