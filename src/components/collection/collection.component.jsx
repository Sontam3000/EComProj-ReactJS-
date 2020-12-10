import React from 'react';
import './collection.style.css';


const Collection=({name,price,imageUrl})=>(
    <div className='collection-item'>
        <img
      className='image'
        src={imageUrl}
        alt={name}
    />
      <span className='name'>{name}</span>
      <span className='price'>{price}</span> 
    
    </div>
 
    
);
export default Collection;