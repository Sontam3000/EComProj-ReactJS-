import React from 'react';
import './box.component.style.css';
import Categories from './data.js';
import CategoriesCol from '../catagories.collection.component/categories.collection.comoponent'

class BoxComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sections : Categories
        };
    }
    render(){
        const {sections}=this.state;
        return(
            <div className='box-comp'>
                
                {
                    sections.map(({id,...otherBoxProps})=>(
                    <CategoriesCol key={id} {...otherBoxProps}/>
                    ))
                }
            </div>
       
        );
    }
}
export default BoxComponent;
