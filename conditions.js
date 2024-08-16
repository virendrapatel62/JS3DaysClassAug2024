console.log("Conditions");

const age = 20;

if (age < 18) {
  console.log("Age is less than 18");
} else {
  console.log("Age is not less than 18");
}

const value = 12; // number
const stringValue = "12"; // string

if (value === stringValue) {
  console.log("Passed");
}

const price = 200;
const stringPrice = "200";

console.log(typeof price);
console.log(typeof stringPrice); // diff types

// == // checks for the values
// === // checks for the values as well as the type of the value

if (price === stringPrice) {
  console.log("Both The Values are same");
} else {
  console.log("Not sames");
}
