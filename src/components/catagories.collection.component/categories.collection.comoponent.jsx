import React from 'react';
import { withRouter } from 'react-router-dom';
import './categories.collection.style.css';

const CategoriesCol=({title,imageUrl,routeName,history,match})=>(

<div class='category-box' onClick={()=>history.push(`category_preview${match.url}${routeName}`)}>
            <div className='category-img'
             style={{
                backgroundImage:`url(${imageUrl})`
                  }} />
                  
                  <div className='content'>
                   <button className='title' >{title.toUpperCase()}</button>
    </div>
        </div>
    
);
   
export default withRouter(CategoriesCol);