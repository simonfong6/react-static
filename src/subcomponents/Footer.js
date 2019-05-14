// Footer.js
import React from 'react';
import SocialMedia from './footer/SocialMedia.js';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">

        <ul class="icons">
          <SocialMedia
            href="https://www.facebook.com/ucsdsolarcar/"
            fontAwesome="facebook"
            name="Facebook"
          />
          <SocialMedia
            href="https://www.instagram.com/ucsdsolarcar/"
            fontAwesome="instagram"
            name="Instagram"
          />
          <SocialMedia
            href="https://github.com/TritonSolarCar"
            fontAwesome="github"
            name="Github"
          />
        </ul>

        <ul class="copyright">
          <li>&copy; 2019 UCSD Solar Car</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>

      </footer>

    );
  }
}

export default Footer;