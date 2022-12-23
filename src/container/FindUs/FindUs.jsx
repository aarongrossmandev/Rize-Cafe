import React from 'react';
import './FindUs.css';
import { SubHeading } from '../../components';
import { images } from '../../Constants';

const FindUs = () => (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">175 E Made Up Ave, New York, NY 10021</p>
          <p className="p__cormorant" style={{color:'#DCCA87',margin:'2rem 0'}}>Opening Hours</p>
          <p className="p__opensans" style={{textTransform:''}}>Mon - Fri: 07:00 am - 04:00 pm</p>
          <p className="p__opensans">Saturday: 09:00 am - 05:00 pm</p>
          <p className="p__opensans">Sunday: Closed</p>
        </div>
        <button className="custom__button" style={{margin:'2rem 0'}}>Visit Us</button>
      </div>

      <div className="app__wraper_img">
        <img src={images.findus} alt="find us" style={{width:'100%', borderTop: '15px solid var(--color-golden)',
      borderRight: '20px solid var(--color-golden)', borderRadius:'50%' }}/>
      </div>
    </div>
  );

export default FindUs