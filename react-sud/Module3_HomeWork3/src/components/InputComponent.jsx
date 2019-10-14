import React from 'react';

const InputComponent = (props) => {
  const {placeholder, onChange, type} = props;
    
  return (
      <input
          type={type}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
      />
  );
}

export default InputComponent;