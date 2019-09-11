//console.log(emplyeeArr);

//1 change '31-12-2019' on 31/12/2019
function date(){
let date = '31-12-2019',
    parametr = '-',
    arr = date.split(parametr);
    newdate = arr.join('/');
    console.log(newdate);
};
date();

// or 
let newDate = date => date.split('-').join('/');
console.log(newDate('31-12-2019'));

//2 create array "names" add from emplyeeArr, change title letter name

const arrOld = ['yoUliYa', 'mikHaiL', 'vlad', 'AnnA'];
   
function lower(){
let newarr = arrOld.join(', ');
    newarr = newarr.toLowerCase();
        console.log(newarr);
        let parametr1 = ', ';
    let arr2 = newarr.split(parametr1);
        console.log(arr2);
    
    for(let j=0; j < arr2.length; j++){
    function ucFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
      }
      console.log( ucFirst(arr2[j]) );
    }
};
lower();

//or with .map
let topLetter = function(){
    let arr = arrOld.map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
    return arr.join(', ');
}
console.log(topLetter(arrOld));

//3 create function which create random email
let  getRandom = emplyeeArr.map(item =>
    (`${item.name}${item.surname}${item.workExperience}@example.com`).toLowerCase()

    );
console.log(getRandom[6]);

//or
function rendommail(name){
    let mail = '';
    for(let i ; i < emplyeeArr.length; i++){
        if(emplyeeArr[i].name == name){
            mail = emplyeeArr[i].name + emplyeeArr[i].surname + emplyeeArr[i].workExperience + "@example.com";
        }
        return mail.toLowerCase();
    }
}

//4 create function which take array emplyeeArr found name and surname emloyees by ID and add 'Mr.' or 'Ms.'

let  getId = emplyeeArr.map(item => {
    if(item.gender == 'male'){
        return `Mr ${item.name} ${item.surname}`;
    }else{
    return `Ms ${item.name} ${item.surname}`;
}

});
console.log(getId[3]);

//ternar

let getId2 = emplyeeArr.map(item => item.gender == 'male' ? `Mr ${item.name} ${item.surname}` : `Ms ${item.name} ${item.surname}`);
console.log(getId2[7]);