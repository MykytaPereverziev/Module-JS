import React from 'react';
import '../App';


const CheckCard = ({ data, numberOfQuestion, setAnswer }) => {

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
            <label
            // key={data.title * Math.random(new Date().getSeconds())}
            >
              <input type="checkbox" 
                  className="btn checkbox"
                  value={index}
                  onChange={(e) => result(e.target.value)}/>
               {item.title}
               </label>
          )
        })}
        </div>
    </div>
  );
};

export default CheckCard;