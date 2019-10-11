import React, { Surname } from 'react';

function userSurname() {
  const [text, setText] = Surname('userSurname')

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

export default userSurname;