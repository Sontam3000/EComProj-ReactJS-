import React from 'react';
import './collection.style.css';
import { Col } from 'react-bootstrap';

const Collection=({name,price,imageUrl})=>(
    
    <Col md="4">
    <div className='collection-item'>
        <img
      className='image'
        src={imageUrl}
        alt={name}
    />
    <div className='collection-detail'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    
    </div>
    </Col>
    
);
export default Collection;