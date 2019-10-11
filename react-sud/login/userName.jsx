import React, { Name } from 'react';

function userName() {
  const [text, setText] = Name('userName')

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

export default userName;