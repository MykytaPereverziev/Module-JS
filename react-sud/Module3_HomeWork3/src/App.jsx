import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/Header';
import Login from './login/Login';
import Pizzas from './pizzas/Pizzas';
import Users from './users/Users';
import Books from './books/Books';
import './App.scss';

function App() {

  const [loginInfo, setLoginInfo] = useState({
    login: '',
    password: ''
  });

  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    role: ''
  });

  const [booksInfo, setBooksInfo] = useState({
    author: '',
    age: '',
    location: ''
  });

  const [pizzasInfo, setPizzasInfo] = useState({
    name: '',
    caloricity: '',
    price: ''
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route
          path='/Login'
          render={(props) => (
            <Login
            {...props}
              pageStatus='Login'
              loginInfo={loginInfo}
              setLoginInfo={setLoginInfo}
            />
          )}
        />

        <Route
          path='/Users'
          render={(props) => (
            <Users
            {...props}
              pageStatus='Users'
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        />

        <Route
          path='/Books'
          render={(props) => (
            <Books
            {...props}
              pageStatus='Books'
              booksInfo={booksInfo}
              setBooksInfo={setBooksInfo}
            />
          )}

        />
        <Route
          path='/Pizzas'
          render={(props) => (
            <Pizzas
            {...props}
              pageStatus='Pizzas'
              pizzasInfo={pizzasInfo}
              setPizzasInfo={setPizzasInfo}
            />
          )}
        />

      </div>
    </BrowserRouter>

  );
}

export default App;