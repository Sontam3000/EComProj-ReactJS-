import React from 'react';
import './collectionpreview.style.css';
import Collection from '../collection/collection.component';



const CollectionPreview=({title,items})=>(
   <div className='collection-preview'>
       <h3 className='category-title'>{title.toUpperCase()}</h3>
       <div className='collection'>
           {
               items.map(({id,...otherColProps})=>(
                   <Collection key={id} {...otherColProps} />
               ))
           }
       </div>

   </div>
        

);

export default CollectionPreview;