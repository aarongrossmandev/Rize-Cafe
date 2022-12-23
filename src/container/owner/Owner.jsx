import React from 'react';
import './Owner.css';

import { SubHeading } from '../../components';
import { images } from '../../Constants';

const Owner = () => (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.owner} alt="owner" className="img-owner"/>
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="The Boss's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="app__owner-content">
          <div className="app__owner-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.</p>
          </div>
            <p className="p__opensans">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>

        <div className="app__owner-sign">
          <p>Jane Doe</p>
          <p className="p__opensans">Founder & Head Barista</p>
          <img src={images.signature} alt="Signature" />
        </div>

      </div>
    </div>
  );

export default Owner