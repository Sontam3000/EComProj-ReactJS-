import React from 'react';
import './catpreview.style.css';
import Categories from '../../components/box.component/data.js';
import CollectionPreview from '../../components/CollectionPreview/collectionpreview.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { Row } from 'react-bootstrap';

class CatPreview extends React.Component{
    constructor(){
    super();
    this.state={
        catshop: Categories
    };
}
render(){
    const {catshop}=this.state;
    return(
        <div className='catshopage'> <Row>
            <div className='category-side'>
           
                <h3>Categories:</h3>
          
            {
           catshop.map(({id,...otherCollectionProps})=>(
            <Sidebar key={id} {...otherCollectionProps}/>
     
                    ))
            } 
            </div> </Row>
            <div className='collection-side'>
                
             {
           catshop.map(({id,...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
     
                    ))
            } 
            </div>
        </div>

    )
}
}
export default CatPreview;