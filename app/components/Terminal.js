import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Commands from './Commands';
import Utils from './Utils';

class Terminal extends Component {

  constructor(extensions) {
    super()

    this.Utils = new Utils(extensions);

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
      // command.focus()
    }, false);

    this.setState({
      width: document.querySelector('.terminal-container').clientHeight,
      height: document.querySelector('.terminal-container').clientWidth
    })
    
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

      this.Utils.addCommandToHistory(input.value)

    }

    // up key
    if (e.keyCode === 38) {

      if (this.Utils.hasPrevCommand()) {
           ReactDOM.findDOMNode(this.refs.command).value = this.Utils.getPrevCommand();
      }

    }

    // down key
    if (e.keyCode === 40) {

      if (this.Utils.hasNextCommand()) {
        ReactDOM.findDOMNode(this.refs.command).value = this.Utils.getNextCommand();
      } else {
        ReactDOM.findDOMNode(this.refs.command).value = '';
      }

    }

  }

  returnOnInput(string) {
  
    const line = ReactDOM.findDOMNode(this.refs.inputLine).cloneNode(true);
    const input = line.querySelector('input.cmdline');

    let command = '';
    let output;
    let outputToReturn;

    outputToReturn = Commands[string] ? Commands[string]() 
                    : `command not found: ${string}`

    output = ReactDOM.findDOMNode(this.refs.output);
    output.insertAdjacentHTML('beforeend', outputToReturn);
    ReactDOM.findDOMNode(this.refs.command).value = '';

  }

  render() {

    const time = this.Utils.getDate();

    return (
      <section className="terminal-overlay">
        <div className='terminal-container'>
          <div className='terminal-header'>            
              <a href="#" className='terminalBtn close'></a>
              <a href="#" className='terminalBtn min'></a>
              <a href="#" className='terminalBtn max'></a>  <span className='terminal-span'>Niraj -- Bash - {this.state.width} x {this.state.height} </span>
          </div>
          <div className='terminal-inner'>
              <span>Last login: {time} on ttys001</span>
              <div>Type in `help` to get started</div>

            <output ref="output">
            </output>

            <div className='terminal-intro'>
              <div className="input-line line" ref="inputLine">
                <div className="prompt">
                  <span className="arrow">&#8594;</span> 
                  <span className="repo"> niraj-vyas</span> git:(
                  <span className="branch">development</span>) $
                </div>
                <div>
                    <input className="cmdline" ref="command" autofocus/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Terminal;
