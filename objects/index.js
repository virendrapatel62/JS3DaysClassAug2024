// console.log("Objects");

// class Student {
//   name;
//   age;
//   address;

//   constructor(name, age, address) {
//     console.log("Constructor called");

//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   run() {
//     console.log("Inside Run method");
//     console.log(this.name);
//     console.log(this.address);
//     console.log(this.age);
//   }
// }

// const student = new Student("Virendra", 24, "JBP");
// const student1 = new Student("Sid", 23, "Indore");

// student.run();
// student1.run();

function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.run = function () {
  console.log(this.age);
  console.log("Run Method");
};

const virendra = new Student("Virendra", 24);
const rishabh = new Student("Rishabh", 24);

console.log(virendra);
console.log(rishabh);

virendra.run();
rishabh.run();
