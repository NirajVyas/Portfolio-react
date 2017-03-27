import React, { Component } from 'react';

class Header extends Component {

  constructor() {
    super();

    this.state = {
      active: false
    }

    this.showOverlay = this.showOverlay.bind(this);
  }

  render() {
    return (
      <div className="header overlay">
        <div className="header-inner">
        <h1 className={this.state.active ? 'active' : null}>Niraj Vyas</h1>
        <h2>Web Developer</h2>

        <div className="logo-container">
          <div className="logo">N<span>V</span></div>
        </div>        

        <nav>
          <ul>
            <li className="terminal" onClick={(e) =>this.showOverlay(e)}>
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

  showOverlay(e) {

    this.setState({
      active: true
    })

     document.querySelector('.terminal-overlay').className = 'terminal-overlay show'
  }
}

export default Header;
