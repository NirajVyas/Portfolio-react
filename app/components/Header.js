import React, { Component } from 'react';
import classNames from 'classnames';
import HeaderIcons from './Header_Icons';

class Header extends Component {

  constructor() {
    super();

    this.state = {
      active: false
    }

    this.showOverlay = this.showOverlay.bind(this);
    this.disableActive = this.disableActive.bind(this);
  }

  render() {
    return (
      <div className={
        classNames(
          'header overlay',
          this.state.active ? 'active' : null
        )
      }>
        <div className="header-inner">
        <h1 className={this.state.active ? 'active' : null}>Niraj Vyas</h1>
        <h2>Web Developer</h2>

        <HeaderIcons active={this.state.active} disableActive={this.disableActive}/>

        <div className={
          classNames(
            'logo-container',
            this.state.active ? 'active' : null
          )
        }>

          <div className="logo">N<span>V</span></div>
        </div>        

        <nav className={
          classNames(
            this.state.active ? 'active' : null
          )
        }>

          <ul>
            <li className="terminal" onClick={(e) =>this.showOverlay('terminal')}>
            <img src="http://placehold.it/350x150>" alt="Terminal icon"/>
              <span>Terminal</span>
            </li>
            <li className="examples" onClick={(e) =>this.showOverlay('portfolio')}>
            <img src="http://placehold.it/350x150>" alt="Website icon"/>
              <span>Work</span>
            </li>
            <li className="contact" onClick={(e) =>this.showOverlay('contact')}>
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

  showOverlay(view) {

    this.setState({
      active: true
    })


     document.querySelector(`.${view}-overlay`).className = `${view}-overlay show`;
  }

  disableActive() {

    if (document.querySelector('.active')) {
      this.setState({active: false})
    } else {
      this.setState({active: true})
    }
  }

}

export default Header;
