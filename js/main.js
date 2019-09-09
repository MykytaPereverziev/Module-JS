//console.log(pizzaList);
//console.log(compositionList)

// 1 Create function with options getSortArrByPrice('ascending');
// getSortArrByPrice('descending'); "FILTR"

const ascending = 'ascending', descending = 'descending';
function getSortArrByPrice (arr, filter) {
    let aray = [];
    if(filter == ascending){
        aray = arr.sort((a,b) =>  a.price - b.price)
    } else if(filter == descending){
        aray = arr.sort((a,b) => b.price - a.price);
    }
    return aray;
}
//console.log(getSortArrByPrice(pizzaList, ascending));
console.log(getSortArrByPrice(pizzaList, descending));

//Filter pizza name "A to Z"
/*
console.log(sortaray.sort(function(a,b){
    let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
    if (nameA < nameB){     
    return -1 }
    else if (nameA > nameB){
    return 1 } else
    return 0
}));
*/

// 2 create function-construcrot new Pizza (id, img, name, [...compositionIds])
//add new Pizza to aray pizzaList
//property Composition includes aray compositionList
// where caloricity = calloriesCount + 1000, price = priceCount + 1000

//New Ingredients

/*
let newPizza = function (id, img, name, composition, caloricity, price) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.composition = ;
  
};
console.log(newPizza);
*/

let newComposition = compositionList.map(newPizza => 
    [newPizza.id, newPizza.name, newPizza.caloricity + 1000, newPizza.price + 1000]
)

//console.log(newComposition);


let Ingredients = compositionList;
for (let name of Ingredients){
    console.log(name);
}
