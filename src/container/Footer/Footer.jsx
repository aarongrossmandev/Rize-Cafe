import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../Constants';

const Footer = () => (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">175 E Made Up Ave, New York, NY 10021</p>
          <p className="p__opensans">+1 212-345-6777</p>
          <p className="p__opensans">+1 212-555-7777</p>
        </div>
        <div className="app__footer-links_logo">
          <span className="app__footer-logo-text">Rize Cafe</span>
          <p className="p__opensans">"May your coffee be strong and your Monday be short"</p>
          <img src={images.coffeeBeans} alt="coffee_beans" style={{marginTop:5,width:'10%'}}/>
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>

        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
            <p className="p__opensans">Monday-Friday:</p>
            <p className="p__opensans">07:00 am - 04:00 pm</p>
            <p className="p__opensans">Saturday:</p>
            <p className="p__opensans">09:00 am - 05:00 pm</p>
        </div>

      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2022 Rize Cafe. All Rights Reserved</p>
      </div>
    </div>
  );

export default Footer