import React from 'react';
import '../css/Recommended.css';

const Recommended = (props) => {



    return(
        <>
            <div className="recommended">
                <h2 className='title'>Recommended</h2>
                <div className="buttons">
                     <button className='btn' onClick={() => props.setProducts(props.Data)}>All Products</button>
                     <button className='btn' onClick={() => props.filterResult('Nike')}>Nike</button>
                     <button className='btn' onClick={() => props.filterResult('Puma')}>Puma</button>
                     <button className='btn' onClick={() => props.filterResult('Adidas')}>Adidas</button>
                     <button className='btn' onClick={() => props.filterResult('Vans')}>Vans</button>
                </div>
            </div>
        </>
    )
}

export default Recommended;