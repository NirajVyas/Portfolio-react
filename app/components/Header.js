import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-inner">
          <ul>
            <li>Terminal</li>
            <li>Work Examples</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
