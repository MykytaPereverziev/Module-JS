import React, { useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import './App.scss';
import * as AllQuestions from './components/questions/questions';
import QuestionsContainer from './components/questions/QuestionsContainer';
// import Timer from './components/Timer';
import Timer from 'react-compound-timer';
import Info from './infoContainer';



const matchDisPatchToProps = dispatch => {
  return {
      updateName: name => {
        dispatch({type: 'UPDATE_NAME', payload: name})
      },
      updateSurname: surname => {
        dispatch({type: 'UPDATE_SURNAME', payload: surname})
      },
      updateAdress: adress => {
        dispatch({type: 'UPDATE_ADRESS', payload: adress})
      },
      addUser: () => {
        dispatch({type: 'ADDUSER'});
      }
 };
};


const App = (props) => {
  const {updateName, updateSurname, updateAdress, addUser} = props;

// const [isActive, setIsActive] = useState(false);
// const [time, setTime] = useState(90);

// const startTimer = () => {
//   setIsActive(!isActive);
// }

// const exit = () => {
//   setTime(90);
//   setIsActive(false);
// }

// useEffect(() => {
//   let interval = null;
//   if (isActive) {
//     interval = setInterval(() => {
//       setTime((time) => {
//         if (time > 0) {
//           return  --time
//         }
//       });
//     }, 1000);
//   }
//   return () => clearInterval(interval);
// }, [isActive, time]);

  return (
    <div className="container">
      {/* <button onClick={() => setIsActive(!isActive)}>matem </button>
      <button onClick={() => setIsActive(isActive)}>his </button>
      {isActive && <QuestionsContainer data={AllQuestions.questions2}/>}
      {!isActive && <QuestionsContainer data={AllQuestions.questions1}/>} */}
      {/* isActive = matem or history*/}
      {/* {<QuestionsContainer data={AllQuestions.questions1}/>} */}
      <input
      type="text"
      placeholder="enter Name"
      onChange={(e) => updateName(e.target.value)}
      />
      <br/>
      <input
      type="text"
      placeholder="enter Surname"
      onChange={(e) => updateSurname(e.target.value)}
      />
      <br/>
      <input
      type="text"
      placeholder="enter Adress"
      onChange={(e) => updateAdress(e.target.value)}
      />
      <br/>
      <button className="btn" onClick={() => addUser()}>CREATE USER</button>
      <br/>
      <Info/>
    </div>
    );
}

export default connect(null, matchDisPatchToProps)(App);
