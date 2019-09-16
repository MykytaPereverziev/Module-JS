/*
Создать функцию, которая вернет массив. 
Массив который вернем будет идентичен массиву books 
за исключением того, что первые 5 элементов массива books, 
переместятся в конец массива.
*/
let arrOfNumbers = [1,2,3,4,5,6,7,8,9,10];
const getReversedArr = arr => {
     let array = arrOfNumbers.splice(5, 5);
     return [...array,...arrOfNumbers];
};
//getReversedArr(arrOfNumbers); /// [6,7,8,9,10,1,2,3,4,5]
console.log(getReversedArr(arrOfNumbers));
/*
Создать функцию, которая вернет массив полных имен 
взятых из эмейлов emails массива. Вид полного имени 
должен быть таким (Name Surname).
*/

const emails = ["vasya_pupkin@gmail.com", 
                "Evgeniy_KoStyuhin@yahoo.com", 
                "james_lorenS@mail.ru", 
                "serHio_LoPeZ@icloud.com"];
/*
let getNamesFromEmails = function (arr){
    let parametr = '@',
        mail = arr.split(parametr)[0],
        parametr2 = '_',
        mail2 = mail1.split(parametr2)[0];
        //console.log(mail2);
        let arr = mail2.map(name => {
            return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        });
        return arr.join(', ');
    }
    console.log(getNamesFromEmails(emails));
 
*/
let getNamesFromEmails = arr => {
let mail = arr.map(item => {
    return item.split('@')[0].split('_');
  });
  return mail.map(getNamesFromEmails => {
    return getNamesFromEmails.map(name => {
      let mail2 = name.split('').toLowerCase();
      return mail2.splice(0,1)[0].toUpperCase() + mail2.join('');
    }).join(' ');
  });
};

console.log(getNamesFromEmails(emails));




// split('@')
// split('_')
//UpperCase
/*
Создать класс Book. Параметры у него должны быть (id, title, description, authorName, authorBirthDate, publishedDate, language). 
Создать класс Author. Класс Author должен содержать свойствa (fullName, birthDate). 
При создании экземпляра Book в свойство author должен быть записан экземпляр класса Author. 
Book должен иметь геттер и сеттер authorInfo, который выводит имя и дату рождения автора и 
записывает fullName и birthDate из параметра сеттера.

book.authorInfo = "A.Pushkin 26.05.1799"
book.authorInfo /// "A.Pushkin 26.05.1799" 
*/

class Book {
    constructor(id, title, description, authorName, authorBirthDate, publishedDate, language){
        this.id = id;
        this.title = title;
        this.description = description;
        this.authorName = authorName;
        this.authorBirthDate = authorBirthDate;
        this.publishedDate = publishedDate;
        this.language = language;
        this.writer = new Author(writerName, writerBirthday);
    }
      
};
class Author {
constructor(fullName, birthDate){
    this.fullName = fullName;
    this.birthDate = birthDate;
}
get authorInfo(){
    let nameDate = this.authorName + this.authorBirthDate;
    return nameDate;
};

set authorInfo(write){
    let writeArr = write.split(' ');
    this.writerName = writeArr[0];
    this.writerBirthday = writeArr[1];
    this.writer = new Author(writerName, writerBirthday);
};

};

book = new Book();