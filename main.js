//1 create function whith properties array emplyeeArr
let Employee = function(id, name, surname, salary, workExperience, isPrivileges, gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
};
//add new employeeObj (new user) derive properties Employee
let employeeObj = new Employee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');
console.log(employeeObj);

//2 add new function - getFullName() to constructor
Employee.prototype.getFullName = function() {
    return `My name is ${this.surname} ${this.name}`;
};
console.log(employeeObj.getFullName());

//3 create new array
/*
const employeeConstructArr = function (arr){
    let newArr = [];
    for(let i=0; i < arr.length; i++){
        newArr.push(arr[i].employeeObj());
    }
    return newArr;
};
console.log(employeeConstructArr()); 
*/
//doesn`t work 4 task - .getFullName() - undefined



const employeeConstructArr = employeeArr.map(student => employee = new Employee(student.id, student.name, student.surname, student.salary, student.workExperience, student.isPrivileges, student.gender));

console.log(employeeConstructArr); 


//4 create function which return array with fullname in emplyeeConstructArr

let getFullNamesFromArr = function (arr){
    let array = [];
    for(let i=0; i < arr.length; i++){
        array.push(arr[i].getFullName());
    }
        return array;
    };
console.log(getFullNamesFromArr(employeeConstructArr));

//5 create function getMidleSalary which return average employees

let getMidleSalary = function(arr){
    let average = 0;
    for(let i = 0; i < arr.length; i++) {
        average += arr[i].salary;
    } return (average/ arr.length);    
};
console.log(getMidleSalary(employeeConstructArr));

//6 Math method random from 0 to 10
function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(Math.trunc(getRandomArbitary(0, 10)));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
console.log(getRandomInt(0, 10));
 


/* function getRandomNumber(maxRandom) {
    
    num randomNumber = arr.length;
    if (randomNumber > maxRandom) {
        getRandomNumber(maxRandom);
    } else {
        return randomNumber;
    }
};
console.log("In lottery win employee " + getRandomNumber(employeeConstructArr));

//create random function which take employee from aray employeeConstructArr

let randomEmployee = function(arr){
    
    Math.trunc(getRandomArbitary(0,arr.length)); 
   
};
console.log("In lottery win employee " + randomEmployee(employeeConstructArr));

*/