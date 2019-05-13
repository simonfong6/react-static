// Footer.js
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">

        <ul class="icons">
          <li><a href="#" class="icon circle fa-twitter"><span class="label">Twitter</span></a></li>
          <li><a href="#" class="icon circle fa-facebook"><span class="label">Facebook</span></a></li>
          <li><a href="#" class="icon circle fa-google-plus"><span class="label">Google+</span></a></li>
          <li><a href="#" class="icon circle fa-github"><span class="label">Github</span></a></li>
          <li><a href="#" class="icon circle fa-dribbble"><span class="label">Dribbble</span></a></li>
        </ul>

        <ul class="copyright">
          <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>

      </footer>

    );
  }
}

export default Footer;