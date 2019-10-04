// click -> to localStorage -> window open()
// when window is open, get from localStorage
// render page

const allInfo = JSON.parse(localStorage.getItem('orderInfo')); 


/*
const render = () => {
    pizzasContainer.innerHTML = "";
    let modidyPizzaArr = orderInfo.map(product => {
      
  })

orderInfo.innerHTML = ` <div>${}</div> `
}

render();
*/

const renderPizzas = () => {
    pizzasContainer.innerHTML = "";
    let modidyPizzaArr = productsArr.map(product => {
      let pizza = pizzaList.find(pizza => pizza.id === product.id);
      return {...pizza, count: product.count}
  })
  
  let totalCount = 0;
  let totalPrice = 0;
  
  modidyPizzaArr.forEach(pizza => {
      totalCount += pizza.count;
      totalPrice += pizza.count * pizza.price;
      createPizza(pizza);
    })
  /* let totalCount = modifyPizzaArr.map(el => el.count).reduce((a, b) => {
      return a + b;
  }) */
  
  
  infoContainer.innerHTML = ` <h1>Total Count ${totalCount}</h1>
                              <p>Total Price ${totalPrice}</p> `
  }
  
  renderPizzas();