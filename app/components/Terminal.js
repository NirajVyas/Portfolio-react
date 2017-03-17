import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Commands from './Commands'

class Terminal extends Component {

  constructor() {
    super()

    this.keydownHandler = this.keydownHandler.bind(this);
    this.returnOnInput = this.returnOnInput.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this)

    this.state = {
      width: '',
      height: ''
    };

  }

  componentDidMount() {

    window.addEventListener("resize", this.updateDimensions);

    const command = ReactDOM.findDOMNode(this.refs.command);

    command.addEventListener('keydown', this.keydownHandler, false)

    window.addEventListener('click', () => {
      command.focus()
    }, false);

    this.setState({
      width: document.querySelector('.terminal-container').clientHeight,
      height: document.querySelector('.terminal-container').clientWidth
    })
    
    console.log(document.querySelector('.terminal-container').clientHeight);

  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions () {
    this.setState({
      width: document.querySelector('.terminal-container').clientWidth,
      height: document.querySelector('.terminal-container').clientHeight
    });
  }

  keydownHandler(e) {

    if (e.keyCode === 13) {
      const line = ReactDOM.findDOMNode(this.refs.inputLine).cloneNode(true);
      const input = line.querySelector('input.cmdline');
      input.autofocus = false;
      const output = ReactDOM.findDOMNode(this.refs.output).appendChild(line);

      this.returnOnInput(input.value)

      // ReactDOM.findDOMNode(this.refs.command).value = '';

    }
  }

  returnOnInput(string) {
  
      const line = ReactDOM.findDOMNode(this.refs.inputLine).cloneNode(true);
      const input = line.querySelector('input.cmdline');

      let command = '';
      let output;
      let outputToReturn;

      console.log("window[string]: ",Commands[string])

      outputToReturn = Commands[string] ? Commands[string]() 
                      : `command not found: ${string}`

  

      // window[string];

    // switch(string) {
    //   case 'help':
    //     outputToReturn = "If you are unsure on what the commands do you can add a question mark (?) at the end of the command for futher help. Here are the list of commands avilable<br />whoami contact clear ls cv "
    //   break;
    //   case 'ls':
    //     outputToReturn = "whoami contact clear ls"
    //   break;
    //   case 'whoami':
    //     outputToReturn = "Name: Niraj Vyas<br />Occupation: Web Developer<br />Technology stack: HTML, CSS, Javascript, Backbone.js, React.js<br />Build tools: Webpack, Brunch, Gulp<br />Version control: Git"
    //   break;
    //   case 'contact':
    //     outputToReturn = "Feel free to contact me at nirajvyas20@gmail.com or via LinkedIn."
    //   break;
    //   case 'cv':
    //     outputToReturn = "Click here to view and download my CV. A new tab will open."
    //   break;
    //   default:
    //     outputToReturn = `command not found: ${string}`
    // }

    output = ReactDOM.findDOMNode(this.refs.output);
    output.insertAdjacentHTML('beforeend', outputToReturn);
    ReactDOM.findDOMNode(this.refs.command).value = '';

  }

  render() {
    
    const time = new Date().toString();

    return (
      <div className='terminal-container'>
        <div className='terminal-header'>            
            <a href="#" className='prp close'></a>
            <a href="#" className='prp min'></a>
            <a href="#" className='prp max'></a>  <span className='terminal-span'>Niraj -- Bash - {this.state.width} x {this.state.height} </span></div>
        <div className='terminal-inner'>
            <span>Last login: ${time} on ttys001</span>
            <div>Type in `help` to get started</div>

          <output ref="output">
          </output>

          <div className='terminal-intro'>
            <div className="input-line line" ref="inputLine">
              <div className="prompt">$</div>
              <div>
                  <input className="cmdline" ref="command" autofocus/>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Terminal;
