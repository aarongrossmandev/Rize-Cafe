import React from 'react';
import { images, data } from '../../Constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte"/>
        <h1 className="headtext__cormorant">Today's Top Brews</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_classic flex__center">
          <p className="app__specialMenu-menu_heading">Classics</p>
          <div className="app__specialMenu-menu_items">
            {data.classics.map((classic, index) => (
              <MenuItem key={classic.title + index} title={classic.title} price={classic.price} tags={classic.tags}/>
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
              <img src={images.coffee} alt="coffee" />
        </div>

        <div className="app__specialMenu-menu_coldbrew flex__center">
          <p className="app__specialMenu-menu_heading">Cold Brew</p>
          <div className="app__specialMenu-menu_items">
            {data.coldbrews.map((coldbrew, index) => (
             <MenuItem key={coldbrew.title + index} title={coldbrew.title} price={coldbrew.price} tags={coldbrew.tags} /> 
             ))} 
          </div>
        </div>

    </div>

          <div style={{marginTop: '15px'}}>
              <button type="button" className="custom__button">View More</button>
          </div>
        </div>

  );

export default SpecialMenu