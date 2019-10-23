import React from 'react';
import '../App';

const TextCard = ({ data, numberOfQuestion, setAnswer }) => {
  
  const result = (e) => {
    let answer = e.target.value;
    if (answer.includes('i')) {setAnswer(1)}
    console.log(setAnswer(1));
    //else setAnswer(0);
  }
  
  
  return (
    <div className="card col-lg-6">
      <h1>Number: {numberOfQuestion}</h1>
      <h2>{data.title}</h2>
      <div className="card-body">
        <input type="text" placeholder="Enter your answer" onChange={result}/>
        <button className="btn-answer" onClick={result}>Answer</button>
      </div>
    </div>
  )
}

export default TextCard;