import React from 'react';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

const Pizzas = (props) => {
    const { pizzasInfo, setPizzasInfo, pageStatus } = props;

    const saveToStorage = (key) => {
        localStorage.setItem(key, JSON.stringify(pizzasInfo));
    };
    return (
        <div>
            <h1>{pageStatus}</h1>
            <img src={require('./LogoPizzas.png')} alt="#" />
            <InputComponent
                placeholder="Enter name"
                onChange={(e) => setPizzasInfo(
                    { ...pizzasInfo, name: e.target.value }
                )}
            />
            <InputComponent
                placeholder="Enter price"
                type="number"
                onChange={(e) => setPizzasInfo(
                    { ...pizzasInfo, price: e.target.value }
                )}
            />
            <InputComponent
                placeholder="Enter caloricity"
                type="number"
                onChange={(e) => setPizzasInfo(
                    { ...pizzasInfo, caloricity: e.target.value }
                )}
            />
            <ButtonComponent class="btnSave" onClick={() => saveToStorage('Pizzas')}>Save
            </ButtonComponent>
            <div className="result">
                <p>Name: {pizzasInfo.name}</p>
                <p>Price: {pizzasInfo.price}</p>
                <p>Caloricity: {pizzasInfo.caloricity}</p>
            </div>
        </div>
    )
}

export default Pizzas;