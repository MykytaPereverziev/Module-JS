import React from 'react';
import '../App';

const RadioCard = ({ data, numberOfQuestion, setAnswer }) => {

  const result = (indexOfAnswerArr) => {
    const answer = data.answers[indexOfAnswerArr];
    setAnswer(answer.point)
  }

  return (
    <div className="card col-lg-6">
      <h1>Number: {numberOfQuestion}</h1>
      <h2>{data.title}</h2>
      <div className="card-body">
        {
          data.answers.map((item, index) => {
            return (
              <label>
                  <input type="radio" 
                  className="btn radio"
                  value={index}
                  onChange={(e) => result(e.target.value)}/>
                  {item.title}
              </label>
            )
          })
        }
        
      </div>
    </div>
  );
};

export default RadioCard;