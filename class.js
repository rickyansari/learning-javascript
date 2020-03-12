// Method1

function User(name, city) {
  let userObject = Object.create({});
  userObject.name = name;
  userObject.city = city;
  Object.setPrototypeOf(userObject, User.prototype);
  return userObject;
}

User.prototype.getName = function() {
  return this.name;
};

user1 = User("ricky", "hyderabad");

// Method 2

function User(name, city) {
  let userObject = Object.create(User.prototype);
  userObject.name = name;
  userObject.city = city;
  return userObject;
}

User.prototype.getName = function() {
  return this.name;
};

user1 = User("ricky", "hyderabad");

// Method 3

function User(name, city) {
  this.name = name;
  this.city = city;
}

User.prototype.getName = function() {
  return this.name;
};
var user1 = new User("ricky", "hyderabad");


// Method4

class User {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  render() {
    return this;
  }

  getName() {
    return this.name;
  }

  getCity() {
    return this.city;
  }
}
var data = () => {};

var user1 = new User("ricky", "hyderabad");

