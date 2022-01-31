import React from 'react';
import './index.scss'
const Input = ({updateParent}) => {

    return (
        <div className='inputDiv'>
            <label className='inputDiv-label'>Search by Lastname:</label>
            <input className='inputDiv-input' icon='search' placeholder='Search...' type="text" onInput={(e) => updateParent(e.target.value)} />
        </div>
    )
};

export default Input;
