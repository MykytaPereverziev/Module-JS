import React, { useState, useEffect} from 'react';
import './App.scss';
import {connect} from 'react-redux';


const mapStateToProps = store => {
    return {
      user: store.userInfo,
    }
  }



const Info = (props) => {
    useEffect(() => {
        console.log(props)
      });
    return (
        <div className="container">
            Name: {props.user.name}
            Surname: {props.user.surname}
            Adress: {props.user.adress}
        </div>
    );
}
export default connect(mapStateToProps, null)(Info);