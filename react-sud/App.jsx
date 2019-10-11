import React, { useState } from 'react';
import Registr from './Registr';
import Login from './Login';
import './App.css';
import userName from './login/userName';
import userSurname from './login/userSurname';
import userAge from './login/userAge';
import userAbout from './login/userAbout';
import userPhone from './login/userPhone';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'


// function App() {
//   const [text, setText] = useState('tesadasdasdasdxt')

//   const getSome = (e) => {
//     setText(e.target.value)
//   }

//   return (
//     <div className="App">
//       <h1>{text}</h1>
//       <input onChange={getSome} />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false,
    }
    this.getSome = this.getSome.bind(this)
  }

  getSome(e) {
    this.setState({ bool: !this.state.bool })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <input onClick={this.getSome}>{
          this.userName
           <userName />
           }
           </input>
        <br></br>
        <input onClick={this.getSome}>{
          this.userSurname 
          <userSurname />
          }
          </input>
        <br></br>
        <input onClick={this.getSome} type="number" name="age" min="1" max="105">{
          this.userAge
          <userAge />
          }</input>
        <br></br>
        <input onClick={this.getSome}>{
          this.userAbout
           <userAbout />
           }
           </input>
        <br></br>
        {/* <PhoneInput
    placeholder="Enter phone number"
    value={ this.state.value }
    onChange={ value => this.setState({ value }) } /> */}

        {/* { 
          this.state.bool ? <Registr /> : <Login />
        }
        <button onClick={this.getSome}>
        { this.state.bool ? 'login' : 'registr'}
        </button> */}
      </div>
    );
  }
}

export default App;
