console.log("Welcome to the functions");

function createTea(milkQuantity, sugarQuantity = 1) {
  console.log("take a container");
  console.log("take", milkQuantity, "ML Milk");
  console.log("mix some ingredients", "suger  :", sugarQuantity);
  console.log("boil it for 5 min.");
  console.log("wait...");
  console.log("***********");

  return "Tea is Ready to enjoy";
}

// const resutl2 = createTea(100, 2);
// const result = createTea(100, 2);

// console.log(result, resutl2);
// createTea(0);
// createTea(500);
// createTea(1000);

// console.log("take a container");
// console.log("take some milk");
// console.log("mix some ingredients");
// console.log("boil it for 5 min.");
// console.log("wait...");
// console.log("done Ready to enjoy");

// console.log("take a container");
// console.log("take some milk");
// console.log("mix some ingredients");
// console.log("boil it for 5 min.");
// console.log("wait...");
// console.log("done Ready to enjoy");

// console.log("take a container");
// console.log("take some milk");
// console.log("mix some ingredients");
// console.log("boil it for 5 min.");
// console.log("wait...");
// console.log("done Ready to enjoy");

// function getFactorial(number) {
//   //para is number
//   let result = 1; // Initialize result to 1, as multiplying by 1 does not change the value.
//   for (let i = number; i > 1; i--) {
//     result *= i;
//   }
//   return result;
// }

// console.log(getFactorial(5));
// console.log(getFactorial(12)); // argumebnt is 5
// console.log(getFactorial(10));
// console.log(getFactorial(2));

let a = 12; // 0
let b = a; // 0

console.log(a, b);

// function print(message) {
//   console.log(message);
// }

// print("Hello From print");

// let printAgain = print;

// printAgain("From Print AGAIN");

// console.log(printAgain);

let print = console.log;

print("Hello , from console.log but in diff way");

function getDinner() {
  console.log("Having Dinner");
}

function practiceJs() {
  console.log("Practicing JS");
}

function goToSleep() {
  console.log("Going to Sleep");
}

function cleanup() {
  console.log("Cleaning Up");
}

function attendJSClass(whatToDoNext) {
  console.log("Attending JS Class");
  whatToDoNext();
  console.log("Done");
  return cleanup;
}

// attendJSClass(getDinner);
// attendJSClass(practiceJs);
// const c1 = attendJSClass(goToSleep);

// c1();
