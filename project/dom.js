const URL = `https://jsonplaceholder.typicode.com/users`;

function onUserDataFetch(result) {
  renderData(result);
}

function renderData(users) {
  const tableBody = document.getElementById("table-body");
  users.forEach((user) => {
    console.log(user);
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");

    idCell.innerHTML = user.id;
    nameCell.innerHTML = user.name;
    emailCell.innerHTML = user.email;

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(emailCell);

    tableBody.appendChild(row);
  });
}

fetch(URL).then((result) => result.json().then(onUserDataFetch));
