// SocialMedia.js
import React from 'react';

class SocialMedia extends React.Component {

  render() {
    return (
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.href}
          class={"icon circle fa-" + this.props.fontAwesome}
        >
          <span class="label">
          {this.props.name}
          </span>
        </a>
      </li>
    );
  }
}

export default SocialMedia;