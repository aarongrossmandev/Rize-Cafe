import React from 'react';
import { SubHeading } from '../../components';
import './Header.css';

import { images } from '../../Constants';
const Header = () => (
      <div className="app__header app__wrapper section__padding" id="home">
          <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour"/>
            <h1 className="app__header-h1">More Than Just a Local Coffee Shop</h1>
            <p className="p__opensans" style={{ margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
          </div>

      <div className="app__wrapper_img">
        <img src={images.hero} alt="Man mixing coffee" className='hero-image'/>
      </div>
    </div>
  
  );

export default Header;