console.log("DOM");

window.onload = function () {
  console.log("Window Loaded....");
  console.log(document.body);

  const blueButton = document.getElementById("blue");
  const tomatoButton = document.getElementById("tomato");

  console.log(tomatoButton, blueButton);

  blueButton.onclick = function () {
    document.body.style.backgroundColor = "dodgerblue";
    document.body.style.color = "black";
  };

  tomatoButton.onclick = function () {
    document.body.style.backgroundColor = "tomato";
    document.body.style.color = "white";
  };
};
