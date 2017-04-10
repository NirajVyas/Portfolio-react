import React, { Component } from 'react';

class Modal extends Component {

  constructor() {
    super()

  }

  render() {

    const data = this.props.data;

    return (
      <section className="modal-container">
        <div className="modal">
          <button onClick={this.props.closeModal}>Close</button>
          <h1>{data.site}</h1>
        </div>
      </section>
    )
  }

}

export default Modal;