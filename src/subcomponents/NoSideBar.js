// NoSideBar.js
import React from 'react';

class NoSideBar extends React.Component {
  render() {
    return (
      <section class="wrapper style4 container">
        <div class="content">
          <section>
            <header>
              <h3>{this.props.title}</h3>
            </header>
            <p>{this.props.paraOne}</p>
            <p>{this.props.paraTwo}</p>
            <p>{this.props.paraThree}</p>
          </section>
        </div>
      </section>
    );
  }
}

export default NoSideBar;