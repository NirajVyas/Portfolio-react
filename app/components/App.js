import React, { Component } from 'react';
import Header from './Header';
import Terminal from './Terminal';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Terminal />

        <Portfolio />

        <Contact />
      </div>
    );
  }
}

