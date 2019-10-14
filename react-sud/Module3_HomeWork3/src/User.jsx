import React from 'react';

const User = (props) => {
  return <div className="user">
  <h1>Name: {props.user.name}</h1>
  <h1>Surname: {props.user.surname}</h1>
  <h1>Age: {props.user.age}</h1>
  <h1>About: {props.user.about}</h1>
  <h1>Phone number: {props.user.phone}</h1> 
  </div>
}
export default User;