import React from 'react';
import './categories.collection.style.css';

const CategoriesCol=({title,imageUrl})=>(
<div class='category-box'>
            <div className='category-img'
             style={{
                backgroundImage:`url(${imageUrl})`
                  }} />
                  
                  <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
      
    </div>
            
            
        </div>
    
);
   
export default CategoriesCol;