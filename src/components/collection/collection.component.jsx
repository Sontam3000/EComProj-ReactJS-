import React from 'react';
import './collection.style.css';
import { Col,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Collection=({name,price,imageUrl})=>(
<Col md='3'>
 <Card  className='collection-item' >
     <img className='card-img' 
      src={imageUrl}
      alt={name} />
<Card.Body className='card-body'>
    <Card.Title><span className='name'>{name}</span><br/>
      <span className='price'>Price: {price}$</span></Card.Title>
  </Card.Body>
    </Card>
    </Col>
);
export default Collection;