console.log("Arrays");

const student = {
  name: "Virendra",
  age: 23,
  address: "Jabalpur",
};

const student2 = {
  name: "Subho",
  age: 24,
  address: "Indore",
};

// const number1 = 1;
// const number2 = 2;
// const number3 = 3;
// const number4 = 4;
// const number5 = 5;
// const number6 = 6;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// [0, 1, 2, 3, 4, 5, 6, 7];
// [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[2]);

numbers[4] = 100;

// console.log(numbers);

const evenNumbers = [];

console.log(evenNumbers);

// evenNumbers[0] = 0;
// evenNumbers[1] = 2;
// evenNumbers[10] = 20;

evenNumbers.push(10);
evenNumbers.push(23);
evenNumbers.push(24);
evenNumbers.push(245);
evenNumbers.push(2435);

console.log(evenNumbers);

evenNumbers.pop();

console.log(evenNumbers);
console.log(evenNumbers.includes(100));

console.log(evenNumbers);

console.log(evenNumbers.indexOf(24));
console.log(evenNumbers.indexOf(1000));

// for (let i = 0; i < evenNumbers.length; i++) {
//   console.log(evenNumbers[i]);
// }

function itr(value, index) {
  console.log("Calling for each function", value, index);
}

// evenNumbers.forEach(itr);

// higherorderfucntion
// callback fucntion

function doubleNumbers(value, index) {
  console.log(value, index);
  return value * 2;
}

const newArray = evenNumbers.map(doubleNumbers);

console.log(newArray);
