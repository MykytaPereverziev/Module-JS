import React, { useState, useEffect} from 'react';
import './App.scss';
import questions from './components/questions/questions';
import QuestionsContainer from './components/questions/QuestionsContainer';
import Timer from './components/Timer';

const App = () => {

const [isActive, setIsActive] = useState(false);
const [time, setTime] = useState(90);

const startTimer = () => {
  setIsActive(!isActive);
}

const exit = () => {
  setTime(90);
  setIsActive(false);
}

useEffect(() => {
  let interval = null;
  if (isActive) {
    interval = setInterval(() => {
      setTime((time) => {
        if (time > 0) {
          return  --time
        }
      });
    }, 1000);
  }
  return () => clearInterval(interval);
}, [isActive, time]);

  return (
    <div className="container">
      <Timer
      time={time}
      isActive={isActive}
      startTimer={startTimer}
      exit={exit}
      />
      {isActive && time >=0 && <QuestionsContainer data={questions}/>}
    </div>
    );
}

export default App;
