import React from 'react';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

const Users = (props) => {
    const { userInfo, setUserInfo, pageStatus } = props;

    const saveToStorage = (key) => {
        localStorage.setItem(key, JSON.stringify(userInfo));
    };

    return (
        <div>
            <h1>{pageStatus}</h1>
            <img src={require('./LogoUsers.png')} alt="#" />
            <InputComponent
                placeholder="Enter name"
                onChange={(e) => setUserInfo(
                    { ...userInfo, name: e.target.value }
                )}
            />
            <InputComponent
                placeholder="Enter age"
                type="number"
                onChange={(e) => setUserInfo(
                    { ...userInfo, age: e.target.value }
                )}
            />
            <InputComponent
                placeholder="Enter role"
                onChange={(e) => setUserInfo(
                    { ...userInfo, role: e.target.value }
                )}
            />
            <ButtonComponent class="btnSave" onClick={() => saveToStorage('Users')}>Save
            </ButtonComponent>
            <div className="result">
                <p>Name: {userInfo.name}</p>
                <p>Age: {userInfo.age}</p>
                <p>Role: {userInfo.role}</p>
            </div>
        </div>
    )
}

export default Users;