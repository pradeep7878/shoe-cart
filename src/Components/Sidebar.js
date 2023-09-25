import React, { useState } from 'react';
import '../css/Sidebar.css';
import {GiRunningShoe} from 'react-icons/gi';
import RadioNames from './RadioNames';

const Sidebar = (props) => {




  return (
    <>
        <div className="sidebar-container">
            <div className="logo-container">
                <a href="#">
                    <GiRunningShoe className='logo'/>
                </a>
            </div>

            <div className="category-container">
                <h3 className='title'>Category</h3>

                <label className='category'>
                    <input type='radio' name='category'  onClick={() => props.setProducts(props.Data)} value="all" />
                    <span className='checkmark'></span>All
                </label>
                <label className='category'>
                    <input type='radio' name='category'  onClick={() => props.handleCategoryChange('sneakers')} value="sneakers" />
                    <span className='checkmark'></span>Sneakers
                </label>
                <label className='category'>
                    <input type='radio' name='category'  onClick={() => props.handleCategoryChange('flats')} value="flats"/>
                    <span className='checkmark'></span>Flats
                </label>
                <label className='category'>
                    <input type='radio' name='category'  onClick={() => props.handleCategoryChange('sandals')} value="sandals"/>
                    <span className='checkmark'></span>Sandals
                </label>
                <label className='category'>
                    <input type='radio' name='category'  onClick={() => props.handleCategoryChange('heels')} value="heels"/>
                    <span className='checkmark'></span>Heels
                </label>
            </div>

            

            <div className="price-container">
                <h3 className='title'>Price</h3>

                <label className='price' onClick={() => props.setProducts(props.Data)}>
                    <input type='radio' name='price' />
                    <span className='checkmark'></span>All
                </label>
                <label className='price' onClick={() => props.handlePriceChange(0,200)}>
                    <input type='radio' name='price' />
                    <span className='checkmark'></span>₹0 - ₹200
                </label>
                <label className='price' onClick={() => props.handlePriceChange(201,400)}>
                    <input type='radio' name='price' />
                    <span className='checkmark'></span>₹201 - ₹400
                </label>
                <label className='price' onClick={() => props.handlePriceChange(401,600)}>
                    <input type='radio' name='price' />
                    <span className='checkmark'></span>₹401 - ₹600
                </label>
                <label className='price' onClick={() => props.handlePriceChange(601,800)}>
                    <input type='radio' name='price' />
                    <span className='checkmark'></span>₹601 - ₹800
                </label>
                <label className='price' onClick={() => props.handlePriceChange(801,1000)}>
                    <input type='radio' name='price' />
                    <span className='checkmark'></span>₹801-₹1000
                </label>
            </div>

            <div className="color-container">
                <h3 className='title'>Color</h3>

                <label className='color'>
                    <input type='radio' name='color' onClick={() => props.setProducts(props.Data)} />
                    <span className='checkmark'></span>All
                </label>
                <label className='color'>
                    <input type='radio' name='color' onClick={() => props.handleColorChange('black')} />
                    <span className='checkmark'></span>Black
                </label>
                <label className='color'>
                    <input type='radio' name='color' onClick={() => props.handleColorChange('white')}/>
                    <span className='checkmark'></span>White
                </label>
                <label className='color'>
                    <input type='radio' name='color' onClick={() => props.handleColorChange('red')}/>
                    <span className='checkmark'></span>Red
                </label>
                <label className='color'>
                    <input type='radio' name='color' onClick={() => props.handleColorChange('blue')}/>
                    <span className='checkmark'></span>Blue
                </label>
                <label className='color'>
                    <input type='radio' name='color' onClick={() => props.handleColorChange('green')}/>
                    <span className='checkmark'></span>Green
                </label>
            </div>

        </div>

    </>
  )
}

export default Sidebar
