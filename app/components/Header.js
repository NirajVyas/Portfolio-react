import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header overlay">
        <div className="header-inner">
        <h1>Niraj Vyas</h1>
        <h2>Web Developer</h2>
          <ul>
            <li className="terminal"><span>Terminal</span></li>
            <li className="examples"><span>Work Examples</span></li>
            <li className="contact"><span>Contact</span></li>
            <li className="cv"><span>CV</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
