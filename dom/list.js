const button = document.getElementById("add-button");
const list = document.getElementById("list");
const input = document.getElementById("item-input");
const error = document.getElementById("error");

// button.onclick = function () {
//   console.log("Click");
// };

function handleButtonClick() {
  console.log("Button Clicked");

  const value = input.value;

  if (value == "") {
    // alert("Please enter a value");
    error.innerText = "Please enter a value";
    return;
  }

  error.innerText = "";

  const li = document.createElement("li");
  li.innerText = value;
  list.append(li);

  input.value = "";
}

button.addEventListener("click", handleButtonClick);

console.log(button, list);
