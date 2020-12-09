import React from 'react';
import { Link } from 'react-router-dom';
import './categories.collection.style.css';

const CategoriesCol=({title,imageUrl})=>(
<div class='category-box'>
    
            <div className='category-img'
             style={{
                backgroundImage:`url(${imageUrl})`
                  }} />
                  
                  <div className='content'>
                  <Link to='/category_preview'> <h1 className='title' >{title.toUpperCase()}</h1></Link>
      
    </div>
            
            
        </div>
    
);
   
export default CategoriesCol;