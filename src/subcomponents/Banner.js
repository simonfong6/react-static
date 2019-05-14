// Banner.js
import React from 'react';

class Banner extends React.Component {
  render() {
    const isButton = this.props.button;
    let button = "";

    if (isButton) {
      button = (
        <footer>
          <ul class="buttons stacked">
            <li><a href="#main" class="button fit scrolly">Tell Me More</a></li>
          </ul>
        </footer>
      );
    }
    return (
        <section id="banner">

        <div class="inner">

          <header>
            <h2>{this.props.title}</h2>
          </header>
          <p>{this.props.lineOne}
          <br />
          {this.props.lineTwo}
          <br />
          </p>
          {button}
        </div>

      </section>

    );
  }
}

export default Banner;