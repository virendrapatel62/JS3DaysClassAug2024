console.log("Arrow Functions Examples");

const sayHello = () => {
  console.log("Hello");
};

const sayHelloToUser = (username) => {
  console.log("Hello " + username);
};

const getHelloMessage = (username) => {
  return "Hello " + username;
};

// function sayHello() {
//   console.log("Hello");
// }

// function sayHelloToUser(username) {
//   console.log("Hello " + username);
// }

// function getHelloMessage(username) {
//   return "Hello " + username;
// }

sayHello();
sayHelloToUser("Virendra");

const message = getHelloMessage("Virendra");
console.log(message);

function sum(a, b) {
  console.log(a + " " + b);
  console.log(a + b);
}

const sum1 = (a, b) => a + b;

console.log(sum1(1, 2));

console.log("Examples..");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number) => console.log(number));
// number.forEach(number => console.log(number));

// const dbls = numbers.map(function (number) {
//   return number * 2;
// });

const dbls = numbers.map((number) => {
  //   console.log(number + " " + number * 2);
  return number * 2;
});

console.log(dbls);

function createLogger(type) {
  //INFO

  switch (type) {
    case "INFO": {
      return (message) => console.log(message);
    }

    case "WARNING": {
      return (message) => console.warn(message);
    }

    case "ERROR": {
      return (message) => console.error(message);
    }
  }
}

const info = createLogger("INFO"); //(message) => console.log(message)
const error = createLogger("ERROR");
const warning = createLogger("WARNING");

console.log(info, warning, error);

info("This is info message");
error("This is error message");
warning("This is warning message");
