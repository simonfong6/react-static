// ThreeColumns.js
import React from 'react';

class ThreeColumns extends React.Component {
  render() {
    return (
      <section class="wrapper style1 container special">
        <div class="row">
          <div class="col-4 col-12-narrower">

            <section>
              <span class={"icon featured fa-" + this.props.leftIcon}></span>
              <header>
                <h3>{this.props.leftTitle}</h3>
              </header>
              <p>
                {this.props.leftPara}
              </p>
            </section>

          </div>
          <div class="col-4 col-12-narrower">

            <section>
              <span class={"icon featured fa-" + this.props.middleIcon}></span>
              <header>
                <h3>{this.props.middleTitle}</h3>
              </header>
              <p>
              {this.props.middlePara}
              </p>
            </section>

          </div>
          <div class="col-4 col-12-narrower">

            <section>
              <span class={"icon featured fa-" + this.props.rightIcon}></span>
              <header>
                <h3>{this.props.rightTitle}</h3>
              </header>
              <p>
              {this.props.rightPara}
              </p>
            </section>

          </div>
        </div>
      </section>
    );
  }
}

export default ThreeColumns;