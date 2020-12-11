import React from 'react';

import './custom.button.style.css';

const CustomButton=({children,...otherProps})=>(
    <button className='custom-button'>
        {children}
    </button>
);
export default CustomButton;