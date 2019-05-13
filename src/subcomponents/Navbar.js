// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/ESW.png';

class Navbar extends React.Component {
  render() {
    return (
      <header id="header" class="alt">
        <h1><img id="logo" src={logo} alt="ESW Logo"/></h1>
        <nav id="nav">
          <ul>
            <li class="current"><Link to="/">About Us</Link></li>
            <li><a href="left-sidebar.html">Team</a></li>
            <li><a href="right-sidebar.html">Updates</a></li>
            <li><Link to="/post/">Media</Link></li>
            <li><a href="contact.html">Donate</a></li>
            <li><a href="#" class="button primary">Contact Us</a></li>
          </ul>
        </nav>
      </header>

    );
  }
}

export default Navbar;