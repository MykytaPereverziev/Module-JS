import React from 'react';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

const Books = (props) => {
    const { booksInfo, setBooksInfo, pageStatus } = props;

    const saveToStorage = (key) => {
        localStorage.setItem(key, JSON.stringify(booksInfo));
    };

    return (
        <div>
            <h1>{pageStatus}</h1>
            <img src={require('./LogoBooks.png')}  alt="#"/>
            <InputComponent
                placeholder="Enter author name"
                onChange={(e) => setBooksInfo(
                    { ...booksInfo, author: e.target.value }
                )}
            />
            <InputComponent
                placeholder="Enter age"
                type="number"
                onChange={(e) => setBooksInfo(
                    { ...booksInfo, age: e.target.value }
                )}
            />
            <InputComponent
                placeholder="Enter location"
                onChange={(e) => setBooksInfo(
                    { ...booksInfo, location: e.target.value }
                )}
            />
             <ButtonComponent class="btnSave" onClick={() => saveToStorage('Books')}>Save
             </ButtonComponent>
            <div className="result">
                <p>Author Name: {booksInfo.author}</p>
                <p>Age: {booksInfo.age}</p>
                <p>Location: {booksInfo.location}</p>
            </div>
        </div>
    )
}
export default Books;