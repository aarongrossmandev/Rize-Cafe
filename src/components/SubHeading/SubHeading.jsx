import React from 'react';
import './SubHeading.css';

import { images } from '../../Constants';

const SubHeading = ({title}) => (
    <div style={{ marginBottom: '1rem'}}>
      <p className="p__cormorant" style={{ fontSize: '28px'}}>{title}</p>
      <img src={images.coffeeBeans} alt="coffee beans" className="beans_img" />
    </div>
  );

export default SubHeading