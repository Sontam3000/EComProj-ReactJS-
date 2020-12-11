import React from 'react';
import './collectionpreview.style.css';
import Collection from '../collection/collection.component';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CollectionPreview=({title,items})=>(
   
      
      
      <div>
       <h3 className='category-title' align='center'>{title.toUpperCase()}</h3>
       <Row className='collection'>
           {
               items.map(({id,...otherColProps})=>(
                   <Collection key={id} {...otherColProps} />
               ))
           }
       </Row>
      
       </div>

        

);

export default CollectionPreview;