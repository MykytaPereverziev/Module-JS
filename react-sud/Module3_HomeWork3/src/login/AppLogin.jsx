import React, {useState} from 'react';
import '../App';
import User from './Users';

function AppLogin() {
  const [state, setState] = useState(false)
  const [name, setName] = useState('Name')
  const [surname, setSurname] = useState('Surname')
  const [age, setAge] = useState('Age')
  const [about, setAbout] = useState('About')
  const [phone, setPhone] = useState('Phone number')

  const getAll = () => {
    setState(!state) 
  }

  const getName = (e) => {
    setName(e.target.value)
  }
  const getSurname = (e) => {
    setSurname(e.target.value)
  }
  const getAge = (e) => {
    setAge(e.target.value)
  }
  const getAbout = (e) => {
    setAbout(e.target.value)
  }
  const getPhone = (e) => {
    setPhone(e.target.value)
  }

  return (
      <div className="App">
        <div className="userInput">
          <input type="text" id="name" placeholder="Name" onChange={(e) => getName(e)}/>
          <label htmlFor="name">{name}</label>
        </div>
        <div className="userInput">
          <input type="text" id="surname" placeholder="Surname" onChange={(e) => getSurname(e)}/>
          <label htmlFor="surname" placeholder="">{surname}</label>
        </div>
        <div className="userInput">
          <input type="number" id="age" placeholder="Age" onChange={(e) => getAge(e)}/>
          <label htmlFor="age">{age}</label>
        </div>
        <div className="userInput">
          <input type="text" id="about" placeholder="About" onChange={(e) => getAbout(e)}/>
          <label htmlFor="about">{about}</label>
        </div>
        <div className="userInput">
          <input type="tel" id="phone" placeholder="Phone" onChange={(e) => getPhone(e)}/>
          <label htmlFor="phone">{phone}</label>
        </div>
        <button className="btn" onClick={() => getAll()}>Get All</button>
        {state && <User user={{name, surname, age, about, phone}}/>}
      </div>
  )
}

export default AppLogin;