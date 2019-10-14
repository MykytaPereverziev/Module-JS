import React, { useState } from 'react';

function Registr() {
  const [text, setText] = useState('Registr')

  const getSome = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <h1>{text}</h1>
      <input onChange={getSome} />
    </div>
  );
};

export default Registr;