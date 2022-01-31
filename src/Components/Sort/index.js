import React from 'react';

const Sort = ({ updateParent, data, condition, conditionFlag }) => {
    const sortingLastName = () => {
        if (condition) {
            const sorted = data.sort((a, b) => {
                if (a.name.last < b.name.last) { return -1; }
                if (a.name.last > b.name.last) { return 1; }
                return 0;
            })
            updateParent(sorted)
            conditionFlag(false)
        } else {
            const sorted = data.sort((a, b) => {
                if (b.name.last < a.name.last) { return -1; }
                if (b.name.last > a.name.last) { return 1; }
                return 0;
            })
            updateParent(sorted)
            conditionFlag(true)
        }
    }
    return (
        <div className='inputDiv'>
            <label className='inputDiv-label'>Sort by Lastname:</label>
            <button className='inputDiv-button' onClick={sortingLastName}>{condition ? "Descendant" : "Ascendant "}</button>
        </div>
    )
};

export default Sort;
