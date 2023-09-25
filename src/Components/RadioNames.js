import React from 'react'

const RadioNames = (props) => {
    return (
        <label className='category'>
            <input type='radio' name='category' id='all' />
            <span className='checkmark'></span>{props.title}
        </label>
    )
}

export default RadioNames
