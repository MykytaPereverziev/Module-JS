import React, { userAge } from 'react';

function userAge() {
  const [text, setText] = Age('userAge')

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

export default userAge;