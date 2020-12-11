import React from 'react';
import CollectionPreview  from '../../components/CollectionPreview/collectionpreview.component';
import Categories from '../../components/box.component/data.js';
import './shoppage.style.css';
import { Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Shop extends React.Component{
    constructor(){
    super();
    this.state={
        catshop: Categories
    };
}
render(){
    const {catshop}=this.state;
    return(
        <Container className='shop-page'>
            <Row>
        {
           catshop.map(({id,...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
     
            ))
            } 
            </Row>
       </Container>
        
);
}
}
export default Shop;
