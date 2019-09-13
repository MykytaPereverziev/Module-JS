console.log(studentsArr)

//1-2

class Student {
  constructor(id, name, surname, course, startYear, endYear, selfPayment, faculty, ratingPoint) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.course = course;
    this.startYear = startYear;
    this.endYear = endYear;
    this.selfPayment = selfPayment;
    this.faculty = faculty;
    this.ratingPoint = ratingPoint;
    this.getFullInfo();
    studentsArr.push(this);
  }

  getFullInfo() {
    return `My name's ${this.name} ${this.surname}, I'm study at ${this.faculty}, my form education's - ${this.selfPayment ? 'contract : 'government'}`
  }

//3

  getRankedPlace() {
    studentsArr.sort((a, b) => {
      if (a.ratingPoint > b.ratingPoint) return -1;
      if (a.ratingPoint < b.ratingPoint) return 1;
      if (a.ratingPoint == b.ratingPoint) return 0;
    });

    return studentsArr.findIndex(student => 
        student.id == this.id) + 1;

  };
};

//4

class Intern extends Student {
  constructor(id, name, surname, course, startYear, endYear, selfPayment, faculty, ratingPoint, companyName) {
    super(id, name, surname, course, startYear, endYear, selfPayment, faculty, ratingPoint);
    this.companyName = companyName;
  };

  getFullInternInfo() {
    return `${this.getFullInfo()}, intern works in - ${this.companyName}`
  };

//get
  get currentCourse() {
    let internCourse = new Date().getFullYear() - this.firstYear;
    return internCourse + 1;
  };
//set
  set currentCourse(course) {
    this.cource = course;
    this.firstYear = new Date().getFullYear() - course + 1;
    this.endYear = this.startYear + 4;
    
  };

};
//let intern = new Intern(0, "Anton", "Kupchikov", 1, 2019, 2023, false, "JS", 95, 'Google')

// doptask
class CreateStudent {
  constructor(name, surname, course, faculty, ratingPoint) {
    this.id = Math.floor(Math.random() * 10);
    this.name = name;
    this.surname = surname;
    this.course = course;
    this.faculty = faculty;
    this.startYear = new Date().getFullYear() - course + 1;
    this.endYear = this.startYear + 4;
    this.ratingPoint = ratingPoint;
//if else if else sort
    if (this.ratingPoint < number) {
      this.selfPayment = true;
    } else {   
}