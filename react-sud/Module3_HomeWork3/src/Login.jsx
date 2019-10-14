import React, { useState } from 'react';

function Login() {
  const [text, setText] = useState('Login')

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

export default Login;