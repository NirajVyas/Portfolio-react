import React, { Component } from 'react';
import classNames from 'classnames'

class HeaderIcons extends Component {

  constructor() {
    super();

    this.closeOverlay = this.closeOverlay.bind(this);

  }

  render() {

    const {active} = this.props;
    return (
     
      <div className={
        classNames(
          'header-icons-container',
          active && 'active'
        )
      }>
        <ul>
          <li>Terminal</li>
          <li>Work</li>
          <li>CV</li>
          <li>Contact</li>
          <li onClick={this.closeOverlay}>Close</li>
        </ul>
      </div>
     
    );
  }

  closeOverlay() {
    console.log(this.props)
    if ( document.querySelector('.show')) {
      document.querySelector('.show').classList.remove('show');
      this.props.disableActive();
    }
  }

}

export default HeaderIcons;
