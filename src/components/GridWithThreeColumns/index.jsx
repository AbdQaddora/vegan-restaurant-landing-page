import React from 'react'

import './style.css';
const GridWithThreeColumns = ({ children }) => {
    return (
        <div className='grid-with-three-columns'>{
            children
        }</div>
    )
}

export default GridWithThreeColumns