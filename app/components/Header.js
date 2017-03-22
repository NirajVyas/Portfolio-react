import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header overlay">
        <div className="header-inner">
        <h1>Niraj Vyas</h1>
        <h2>Web Developer</h2>

        <div className="logo-container">
          <div className="logo">N<span>V</span></div>
        </div>        

        <nav>
          <ul>
            <li className="terminal">
            <img src="http://placehold.it/350x150>" alt="Terminal icon"/>
              <span>Terminal</span>
            </li>
            <li className="examples">
            <img src="http://placehold.it/350x150>" alt="Website icon"/>
              <span>Work</span>
            </li>
            <li className="contact">
            <img src="http://placehold.it/350x150>" alt="Contact icon"/>
              <span>Contact</span>
            </li>
            <li className="cv">
              <img src="http://placehold.it/350x150>" alt="CV icon"/>
              <span>CV</span>
            </li>
          </ul>
        </nav>

        </div>
      </div>
    );
  }
}

export default Header;
