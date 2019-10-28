import React from 'react';
import '../App';

const Timer = (props) => {
  const { time, exit, isActive, startTimer} = props;

  return (
    <div className="card col-lg-6">
      <h1>Test starting...</h1>
      <h2>You have only</h2>
      <h2>{time}</h2>
      <h2>seconds</h2>
    {!isActive && <button className="btn-start" onClick={startTimer}>Start</button>}
    {isActive && <button className="btn-exit" onClick={exit}>Exit</button>}
    </div>
  )
}

export default Timer;