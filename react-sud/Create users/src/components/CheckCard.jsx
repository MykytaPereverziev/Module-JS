import React, { useState, useEffect } from 'react';
import '../App';

const initialAnswers = answers => {
  return answers.map(answer => {
    return {...answer, isChecked: false};
  })
}

const CheckCard = ({ data, numberOfQuestion, setAnswer }) => {

  const [arrOfAnswer, setArrOfAnswer] = useState(initialAnswers(data.answers))

useEffect(() => {
  console.log(arrOfAnswer)
},[])

const checkFunction = (e, index) => {
  const newArr = [...arrOfAnswer];
  newArr[index].isChecked = e.target.checked;
  let resultMiss = newArr
                        .filter(el => el.isChecked && !el.point)
                        .map(el => el.point)
  resultMiss = resultMiss.length / 2;
  
  let resultRight = newArr
  .filter(el => el.isChecked)
  .map(el => el.point)
  resultRight = resultRight.length ? resultRight.reduce((a, b) => a + b) :0;
  setAnswer(resultRight - resultMiss);
}
  // const result = (indexOfAnswerArr) => {
  //   const answer = data.answers[indexOfAnswerArr];
  //   setAnswer(answer.point)
  // }

  return (
    <div className="card col-lg-6">
      <h1>Number: {numberOfQuestion}</h1>
      <h2>{data.title}</h2>
      <div className="card-body">
          {
          data.answers.map((answer, index) => {
          return (
            <div>
            <label htmlFor={`${answer.title}+${numberOfQuestion}`}>{answer.title}</label>
            <input type="checkbox" className="btn checkbox" 
            id = {`${answer.title}+${numberOfQuestion}`}
            onChange={(e) => {checkFunction(e, index)}}
            />
            </div>
          )
        })}
        </div>
    </div>
  );
};

export default CheckCard;