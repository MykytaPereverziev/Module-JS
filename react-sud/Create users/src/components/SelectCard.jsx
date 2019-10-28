import React from 'react';
import '../App';

const SelectCard = ({ data, numberOfQuestion, setAnswer }) => {
  const result = (indexOfAnswerArr) => {
    const answer = data.answers[indexOfAnswerArr];
    setAnswer(answer.point)
  }
  return (
    <div className="card col-lg-6">
      <h1>Number: {numberOfQuestion}</h1>
      <h2>{data.title}</h2>
      <div className="card-body">
        <select onChange={(e) => result(e.target.value)}>
          {data.answers.map((item, index) => {
            return (
              <option value={index} 
              // key={data.title * Math.random(new Date().getSeconds())}
              >{item.title}</option>
            );  
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectCard;