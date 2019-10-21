//пока не юзаю
import React from 'react';

const Input = (props) => {
    const {placeholder, onChange} = props;
    return   <input 
    type="text" 
    placeholder={placeholder}
    onChange={(e) => onChange(e)}
    />
}
export default Inputs;