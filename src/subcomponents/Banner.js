// Banner.js
import React from 'react';

class Banner extends React.Component {
  render() {
    return (
        <section id="banner">

        <div class="inner">

          <header>
            <h2>UCSD Solar Car</h2>
          </header>
          <p>Welcome!
          <br />
          Engineers for a Sustainable World
          <br />
          </p>
          <footer>
            <ul class="buttons stacked">
              <li><a href="#main" class="button fit scrolly">Tell Me More</a></li>
            </ul>
          </footer>
          
        </div>

      </section>

    );
  }
}

export default Banner;