import React from 'react';
import './header.style.css';
import { Link } from 'react-router-dom';

const Header=()=>(
    <div className='header'>
         <Link className='logo-container' to='/'>
            <h1 className='logo '> SANSHOP</h1>
        </Link> 
        <input className='search-bar' type='search' placeholder='search'/>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/sign-in-sign-up'>SIGN IN</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
        </div>
        
    </div>

);
export default Header;