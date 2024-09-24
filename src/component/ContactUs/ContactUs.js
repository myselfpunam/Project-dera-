import React from 'react';
import './ContactUs.css'
import { Link } from 'react-router-dom';
const ContactUs = () => {
  return (
    <div className="arch_contact_us_duplicate">
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block container">
          <div className="responsive-cell-block wk-mobile-12 wk-desk-5 wk-tab-10 wk-ipadp-5" id="ih6s">
            <p className="section-title">
              Get in touch
            </p>
          </div>
          <div className="responsive-cell-block wk-ipadp-6 wk-mobile-12 wk-desk-5 wk-tab-9" id="i6df">
            <div className="form-wrapper">
              <input className="input input-element" name="Name" placeholder="Name" />
              <input className="input input-element" name="Contact Number" placeholder="Contact Number" />
              <input className="input input-element" name="Email" placeholder="Email" />
              <textarea className="textinput input-element" placeholder="Message"></textarea>
              <button className="button">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;