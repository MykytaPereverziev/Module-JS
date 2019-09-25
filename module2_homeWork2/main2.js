/* const form = document.getElementsByClassName('form')[0];
const div = document.getElementsByClassName('div')[0];
const p = document.getElementsByClassName('p')[0];
//всплытие событий

//let capture = false;
let capture = true;

form.addEventListener('click', function(){
    //event.stopPropagation()
    console.log(this.tagName)
}, capture);

div.addEventListener('click', function(){
    console.log(this.tagName)
}, capture);

p.addEventListener('click', function(){
    //console.log(this.tagName)
    //event.stopImmediatePropagation()
    console.log('p: ', this.tagName)
}, capture);

p.addEventListener('click', function(){
    //console.log(this.tagName)
    console.log('p: ', this.classList)
}, capture);

*/
/*
form.onclick = function(){
    console.log(this.tagName)
}

div.onclick = function(){
    event.stopPropagation();
    console.log(this.tagName)
}

p.onclick = function(event){
    
    console.log(this.tagName)
}
*/

const pizzaContainer = document.getElementById('pizzaContainer');
const input = document.getElementById('input');

//id, img, name, composition, caloricity, price

const createPizza = (pizzaObj) => {

    const pizzaElem = document.createElement('div');
    pizzaElem.classList.add('pizza');
    pizzaElem.id = pizzaObj.id;
    //берем из pizzaList элементы с name
    const h1Elem = document.createElement('h1');
    h1Elem.innerText = pizzaObj.name;
    pizzaElem.append(h1Elem);
    //берем из pizzaList элементы с price
    const pElem = document.createElement('p');
    pElem.innerText = pizzaObj.price + ' $';
    pizzaElem.append(pElem);
    //перебираем forEach массив данных composition
    const ulElem = document.createElement('ul');
    pizzaObj.composition.forEach(compose => {
        const li = document.createElement('li');
        li.innerText = compose;
        ulElem.append(li);
    });
    pizzaElem.append(ulElem);
    
    //берем из pizzaList элементы с calorisity
    const spanElem = document.createElement('span');
    spanElem.innerText = pizzaObj.caloricity + ' calorisity';
    pizzaElem.append(spanElem);

    /*
    const spanElem = document.createElement('span');
    spanElem.innerText = pizzaObj.composition.map(compos => {
        compos = compos.split('');
        return compos[0].toUpperCase() + compos.split(1).join('');
    }).join(', ');
    pizzaElem.append(spanElem);
    */
    pizzaContainer.append(pizzaElem);
}


const renderPizza = arrOfPizza => {
pizzaContainer.innerHTML = "";
arrOfPizza.forEach(pizza => {
    createPizza(pizza);
})
}

renderPizza(pizzaList);

///search by compositions or name

//input.addEventListener('change', function(e) {
input.addEventListener('input', function(e) {
    const value = event.target.value.toLocaleLowerCase().replace(' ', '');
    const findedPizza = pizzaList.filter(pizza => {
        return pizza.name.toLocaleLowerCase().replace(' ', '').includes(value) || 
        pizza.composition.find(compos => compos.toLowerCase().includes(value)) ||
        pizza.price.toString().includes(value)
    })
    renderPizza(findedPizza);
});

const comInput = document.getElementById('com');
comInput.addEventListener('change', function(){
    console.dir(this.dataset);
    // this.dataset.caloricity = '200';

    //this.dataset.caloricity = JSON.stringify(pizzaList);
})

const maxPrice = document.getElementById('inputMax');
const minPrice = document.getElementById('inputMin');
const inputPrice = document.getElementByName('inputPrice');

//min max input price
inputPrice.addEventListener('input', function(e) {
    pizzaContainer.innerHTML = "";
    const value = event.target.value;
    const findedPizza = pizzaList.filter(pizza => {
        if(pizza.price >= minPrice.value && pizza.price <= maxPrice.value){
            return pizza;
        }
    })
    renderPizza(findedPizza);
});

//min max input caloricity

const maxCaloricity = document.getElementById('inputMaxCaloricity');
const minCaloricity = document.getElementById('inputMinCaloricity');
const inputCaloricity = document.getElementByName('inputCaloricity');

inputCaloricity.addEventListener('input', function(e) {
    pizzaContainer.innerHTML = "";
    const value = event.target.value;
    const findedPizza = pizzaList.filter(pizza => {
        if(pizza.caloricity >= minCaloricity.value && pizza.caloricity <= maxCaloricity.value){
            return pizza;
        }
    })
    renderPizza(findedPizza);
});