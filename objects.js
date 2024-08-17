// const name1 = "virendra";
// const age1 = 26;
// const address = "jabalpur";

const student1 = {
  name: "Virendra",
  age: 23,
  address: "Jabalpur",
};

const student2 = {
  name: "sid",
  age: 34,
  address: "Indore",
  run: function () {},
};

console.log(student1);

console.log(student1.name);
console.log(student1.address);
console.log(student1.age);

const user = {
  username: "virendra62",
  email: "virnedra@gmail.com",
  password: "**********",
  is_active: true,
};

console.log(user.email);
console.log(user["email"]);

console.log(user.username);
console.log(user.password);
console.log(user.isVerified);

user.isVerified = true;

const a = 90;

console.log(user);

const user2 = {
  name: "sid",
  age: 34,
  address: {
    city: "indore",
    state: "MP",
  },
  run: function () {
    console.log("Hello From Run ");
  },
};
user2.run();

console.log(user2.address.city);
