import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';

const Login = (props) => {
    const { loginInfo, setLoginInfo, pageStatus } = props;

    const saveToStorage = (key) => {
        localStorage.setItem(key, JSON.stringify(loginInfo));
    };
    return (
        <div className="element">  
            <h1>{pageStatus}</h1>
            <img src={require('./LogoLogin.png')} alt="#" />
            <InputComponent
                placeholder="Enter login"
                onChange={(e) => setLoginInfo(
                    { ...loginInfo, login: e.target.value }
                )}
            />
            <InputComponent
                placeholder="Enter password"
                type="password"
                onChange={(e) => setLoginInfo(
                    { ...loginInfo, password: e.target.value })}
            />
            <ButtonComponent onClick={() => saveToStorage('auth')}>LOGIN
        </ButtonComponent>
        </div>
    )
}
export default Login;