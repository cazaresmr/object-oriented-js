class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

var userOne = new User("john@email.com", "John");
var userTwo = new User("jane@emal.com", "Jane");

console.log(userOne);
console.log(userTwo);
