class createPizzaModel {
    constructor({img, name, composition, price, caloricity}) {
        this.id = pizzaList.lenght+1;
        this.img = img;
        this.name = '';
        this.composition = [];
        this.price = price;
        this.caloricity = caloricity;
        this.isNew = true;
        this.getName(name)
        this.getCompositionAsName(composition);
    }

    getName(name) {
        name = name.toLowerCase().split('');
        name[0] = name[0].toUpperCase();
        this.name = name.join('');
    }
    getCompositionAsName(compositions){
        this.composition = compositionList.filter(el => {
            return compositions.includes(el.id)
        }).map(el => el.name);
    }
}

const pizzaModel = {
        img:  '',
        name:  '',
        composition:  [],
        price: 0,
        caloricity: 0,
}

const addTitle = document.getElementById('addTitle');
const compositionsContainer = document.querySelector('.compositions');
const infoContainer = document.querySelector('.info');

const btnCreate = document.getElementById('btnCreate');
const addImg = document.getElementById('addImg');
const imageView = document.getElementById('imageView');


const renderInfo = (caloricity, price) => {
    infoContainer.innerHTML = `<h1>Price: ${price || 0} $</h1>
                                <p>Caloricity: ${caloricity || 0} cal</p>`
}
renderInfo()

compositionList.forEach(item => {
    const labelElem = document.createElement('label');
    labelElem.innerText = item.name;
    labelElem.htmlFor = 'composition'+item.id;
    const compositionElem = document.createElement('input');
    compositionElem.id = 'composition'+item.id;
    compositionElem.type = 'checkbox';

    compositionElem.addEventListener('change', function() {
        let composition = pizzaModel.composition;
        
        if (this.checked) {
          composition.push(item.id)
        } else {
          pizzaModel.composition = composition.filter(composId => composId !== item.id);
        }
    
        pizzaModel.price = pizzaModel.composition.length ? 100 : 0;
        pizzaModel.caloricity = pizzaModel.composition.length ? 1000 : 0;
    
        pizzaModel.composition.forEach(composId => {
          pizzaModel.price += compositionList.find(el => el.id === composId).price;
        })
        pizzaModel.composition.forEach(composId => {
          pizzaModel.caloricity += compositionList.find(el => el.id === composId).caloricity;
        })
        renderInfo(pizzaModel.caloricity, pizzaModel.price);
      })
/*
    compositionElem.addEventListener('change', function(){
        console.log(item.id);
        console.log(this.checked);
        let composition = pizzaModel.composition;

       

        if(this.checked){
            composition.push(item.id)
        }else{
            pizzaModel.composition = composition.filter(composId => composId !== item.id)
        }
        //console.log(pizzaModel.composition);
        pizzaModel.price = pizzaModel.composition.lenght ? 100 : 0;
        pizzaModel.caloricity = pizzaModel.composition.lenght ? 1000 : 0;
        
        pizzaModel.composition.forEach(composId => {
            pizzaModel.price += compositionList.find(el => el.id === composId).price;
        })

        pizzaModel.composition.forEach(composId => {
            pizzaModel.caloricity += compositionList.find(el => el.id === composId).caloricity;
        })
        renderInfo(pizzaModel.caloricity, pizzaModel.price);
    })
    */

    compositionsContainer.append(labelElem)
    compositionsContainer.append(compositionElem)
})

addTitle.addEventListener('input', (e) => {
    pizzaModel.name = e.target.value;
})

/* btnCreate.addEventListener('click', function() {
    console.log(pizzaModel);
})
*/

addImg.addEventListener('change', (e) => {
   //console.log(1);
    const file = e.target.files[0];
    if(!file) return;
    //console.log(e.target.files);
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        imageView.src = fileReader.result;
        pizzaModel.img = fileReader.result;
        //console.log(2);
    };
    //console.log(fileReader.result);
    fileReader.readAsDataURL(file);
    //console.log(3);
})

btnCreate.addEventListener('click', () => {
    let pizza = new createPizzaModel(pizzaModel);
    let pizzasFromStorage = JSON.parse(localStorage.getItem('newPizzas'));
    pizzasFromStorage = pizzasFromStorage ? pizzasFromStorage : [] ;
    pizzasFromStorage.push(pizza);
    localStorage.setItem('newPizzas', JSON.stringify(pizzasFromStorage));
})
/* put in main.js
let getNewPizzas = () => {
    let pizzas = JSON.parse(localStorage.getItem('newPizzas'))
    pizzas = pizzas || [];
    pizzaList.push(...pizzas);
}
getNewPizzas();
*/
//живая и неживая коллекция
//window.$ = selector => {
    /*
    document.getElementsById('btnMenu').addEventListener('click', function() {
        $('.drop').slideToggle();
    })
*/
    // $('.btn').click((e) => console.log(e));
    $('.btn').click((e) => $('.drop').slideToggle());