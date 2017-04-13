import React, { Component } from 'react';

class Contact extends Component {

  constructor() {
    super()

  }


    render() {


      return (
        <section className="contact-overlay">

          <form id="contact-form" action="/" method="post">
            <h3>Get in touch</h3>
            <div>
              <label>
                <span>Name: (required)</span>
                <input placeholder="Please enter your name" type="text" tabindex="1" required autofocus />
              </label>
            </div>
            <div>
              <label>
                <span>Email: (required)</span>
                <input placeholder="Please enter your email address" type="email" tabindex="2" required />
              </label>
            </div>
            <div>
              <label>
                <span>Message: (required)</span>
                <textarea placeholder="Include all the details you can" tabindex="5" required></textarea>
              </label>
            </div>
            <div>
              <button name="submit" type="submit" id="contact-submit">Send Email</button>
            </div>
          </form>

        </section>
      )

    }

}

export default Contact;
