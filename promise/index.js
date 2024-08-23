console.log("Promise");

// function makeTea(afterProcess) {
//   console.log("Step 1");
//   console.log("Step 2");
//   console.log("boiling.. hold on...");

//   setTimeout(() => {
//     console.log("Chai ban gai...");
//     const chai = "☕";
//     afterProcess(chai);
//   }, 5000);
// }

// makeTea((chai) => {
//   console.log(chai);
// });

function makeTea() {
  console.log("Step 1");
  console.log("Step 2");
  console.log("boiling.. hold on...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Chai ban gai...");
      const chai = "☕";
      resolve(chai);
    }, 5000);
  });
}

makeTea().then((result) => {
  console.log(result);
});

console.log("Fetching daata...");

fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
  console.log(result);
});

console.log("hello world");
