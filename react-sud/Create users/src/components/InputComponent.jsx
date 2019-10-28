import React from 'react';

const InputComponents = (props) => {
    const {placeholder, onChange} = props;
    return   <input 
                type="text" 
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
         />
}
export default InputComponents;