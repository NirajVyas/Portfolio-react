import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Utils from './Utils';
import data from '../assets/data';
import Modal from './Modal';

class Portfolio extends Component {

  constructor() {
    super()

    this.state = {
      showModal: false,
      modalData: {}
    }

    this.closeModal = this.closeModal.bind(this);

  }


    render() {

      if (!data) {
        return null;
      }

      let boundItemClick;

      return (
        <section className="portfolio-overlay">
          <ul className="work-example-list">

            {
                data.map((site) => {

                  boundItemClick = this.openModal.bind(this, site);

                  return (
                    <li onClick={boundItemClick} key={site.id} className={site.latest && 'latest'}>
                      {site.site}
                    </li>
                  );
                })
            }

          </ul>

          {this.state.showModal && <Modal data={this.state.modalData} closeModal={this.closeModal} />} 
          
        </section>
      );

    }

    openModal(data) {

     document.querySelector('.portfolio-overlay').className = 'portfolio-overlay show no-scroll';

      this.setState({
        showModal: true,
        modalData: data
      });
    }

    closeModal() {
      this.setState({
        showModal: false
      });
    }

}

export default Portfolio;
