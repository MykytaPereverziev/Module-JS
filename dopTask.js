//Dop Task
let count = 2;
let countGet = function(){
    return new Promise(resolve => 
        setTimeout(() => resolve(
        count = count * 2), 3000))
 
    .then((res) => new Promise(resolve =>
    setTimout(() => resolve(
    res = res + 1), 2000)))
    .then((res) =>
        console.log(res));
    };
countGet();

//OR "Async/await"
/*
let op1 = function() {
    return new Promise(resolve => {
      setTimeout(() => resolve(count * 2), 3000)
    })
  };
  
  let op2 = function(res) {
     return new Promise(resolve => {
      setTimeout(() => resolve(res + 1), 2000)
    })
  };
  
  let getCountAsync = async function () {
   const res1 = await op1();
   const res2 = await op2(res1);
    console.log(res2);
  };
  
  getCountAsync()
   
   */

    /*
let promise = new Promise(function(resolve, reject) {
    //executor
    let count = 2;

setTimout(() => resolve(
    count = count + 1), 2000);
setTimout(() => reject(new Error(count = count * 2), 3000);    
});
//resolve started first function, send in .then
promise.then(result => console.log(result),
            error => console.log(error)
            );

/*
promiseObj.then(reselve =>{
    console.log(reselve)
});
*/
/*
setTimeout(() => {
    //reselve(5 + 5) }, 2000);
    //reject(5 + 5) }, 2000);

});
console.log('start', new Date().getSeconds());
promiseObj.then(reselve => {
console.log(reselve);
console.log('end', new Date().getSeconds());
}).catch((err) => {console.log(err)});
*/
//console.log('end', new Date().getSeconds());

/*
let count = 2;

setTimout(() => {
    count = count + 1;
}, 2000);

setTimout(() => {
    count = count * 2;
}, 3000);


console.log(count);

*/