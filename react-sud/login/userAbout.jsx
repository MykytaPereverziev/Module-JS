import React, { About } from 'react';

function userAbout() {
  const [text, setText] = About('userAbout')

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

export default userAbout;