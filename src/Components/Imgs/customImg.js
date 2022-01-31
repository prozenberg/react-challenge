import React from 'react'

const CustomImg = ({img, name ,id, classN, fn}) => (
    <img src={img} alt={name} id={id} className={classN} onClick={fn} />
)

export default CustomImg