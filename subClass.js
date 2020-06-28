function User(name, city) {
  this.name = name;
  this.city = city;
}

User.prototype.getName = function() {
  return this.name;
};

function superUser(name, city, balance) {
  User.call(this, name, city);
  this.balance = balance;
}

superUser.prototype = Object.create(User.prototype);
// Object.setPrototypeOf(superUser.prototype, User.prototype);

superUser.prototype.getBalance = function() {
  return this.balance;
};
var superUser1 = new superUser("ricky", "hyderabad", 100);
console.log(superUser1);
