import React, { useEffect, useState } from 'react';
import '../css/Header.css';
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai';

const Header = (props) => {

  useEffect(() =>{
    props.inputRef.current.focus();
  })

  return (
    <div>
        <header>
            <div className="header-input">
                <input 
                    type='text' 
                    placeholder='Search your Shoes..'
                    onChange={props.handleChange}
                    value={props.input}
                    ref={props.inputRef}
                     />
            </div>
            <div className="icons">
                {<AiOutlineHeart className='icon'/>}
                {<AiOutlineShoppingCart className='icon'/>}
                {<AiOutlineUser className='icon'/>}
            </div>
        </header>
    </div>
  )
}

export default Header;
