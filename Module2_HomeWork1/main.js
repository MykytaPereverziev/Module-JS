let arrPizza = [...pizzaList];


let modal = document.getElementsByClassName('modal')[0];
let modalContent = document.getElementsByClassName('modal-content')[0];

let onePizzaClick = function (id) {
    let pizzaObj = pizzaList.find(pizza => pizza.id == id);
    
    modal.style.display = "block";
    modalContent.innerHTML = `<div class ="modal_pizza_inner">    
                        <img class="modal_pizza-img" src="img/${pizzaObj.img}" alt="pizza">
                        <div class="pizza-text">
                        <h2 class="modal_pizzaName title">${pizzaObj.name}</h2>
                        <p>Состав: ${pizzaObj.composition.join(', ')}</p>
                        <img class="ingredients" src="img/ingredients.png">
                        <div class ="modal_caloricity">
                        <span>${pizzaObj.caloricity} calories</span>
                        <img class="modal_calories" src="img/calories-icon.jpg">
                        </div>
                        <div class ="modal_price">
                        <span>Price: ${pizzaObj.price}</span>
                        </div>
                        </div>
                        </div>
                        <span class="close icon-cancel-circled-outline"></span>
                        <button class="modal_toCart icon-basket" type="button">В корзину</button>
                        `;
};

/*
let onePizzaClick = (arr) => {
  for (let i = 0; i < arr.length; i++) {
      elements[i].innerHTML += `<div class="pizzaArr" id="${arr[i].id}">  
          <div class="pizzaArr-img">
              <img src="img/${arr[i].img}" alt="#">
          </div>
          <div class="pizzaArr-name">
              <h2>Пицца ${arr[i].name}</h2>
              <p>${+arr[i].price}.00 ₴</p>
          </div>
          <div class="pizzaArr-button">
              <button id="add">Add in basket</button>
          </div>
          <div class="pizzaArr-components">
              <p>${arr[i].composition.join(', ')}</p>
          </div>
      </div>`;
*/

let PizzaCard = function () {
    let pizzaCards = "";
    arrPizza.forEach((pizza, pizzaIndex) => {
      pizzaCards += `<div class="pizza col-md-6 col-lg-4" id="pizza${pizzaIndex}">
                              <div class ="pizza_inner" onclick="onPizzaClick(${pizza.id})">    
                              <img class="pizza-img" src="img/${pizza.img}" alt="pizza">
                              <h2 class="pizzaName title">${pizza.name}</h2>
                              <p>Состав: ${pizza.composition.join(', ')}</p>
                              <div class ="caloricity">
                              <span>${pizza.caloricity} calories</span>
                              </div>
                              <div class ="price">
                              <span>Price: ${pizza.price}</span>
                              </div>
                              <button class="buyPizza" id="pay" type="btn">В корзину</button>
                              </div>
                              </div>`;
  
    });
  
    document.getElementsByClassName('pizzaCards')[0].innerHTML = pizzaCards;
  };
  
  PizzaCard();

  //sort
  /*
  let parentRadio = document.querySelector('.input-sort');
  let lastRadioChecked = parentRadio.querySelector('input[type="radio"]:checked');

parentRadio.onclick = (e) => {
  let target = e.target;
  
  if(target.tagName != 'INPUT' || target == lastRadioChecked) return;
  
  lastRadioChecked = target;  
  sortOptions(target.value);
  document.querySelector('.items option').selected = true;
};

let options = document.querySelectorAll('.items option');
let select = options[0].parentNode;

function sortOptions(methodName) { 
  for(let i = options.length - 1; i >= 0; i--) {
    select.removeChild(options[i]);
  }
  
  let arrOptions = [];
  for(let i = 0; i < options.length; i++) {
    arrOptions.push({
      value: options[i].value,
      text: options[i].innerHTML.toLowerCase(),
      elem: options[i]
    });
  }
  
  let ListSort = {
    priceUp: (a, b) => b.value - a.value,
    CalUp: (a, b) => a.value - b.value,
    AzOrder: (a, b) => a.text > b.text ? 1 : -1 ,
    ZaOrder: (a, b) => b.text > a.text ? 1 : -1,
    default: (a, b) => 0
  }; 
  
  arrOptions.sort(ListSort[methodName]);
  for(let i = 0; i < arrOptions.length; i++) {
    select.appendChild(arrOptions[i].elem);
  } 
};
*/