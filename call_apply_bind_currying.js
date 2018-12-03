
var person = {
  firstName: "Severus",
  lastName: 'Snape',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
}

var logName = function (region) {
  console.log(this.getFullName());
  console.log("region", region)
}

try {
  logName(); // Uncaught TypeError: this.getFullName is not a function
} catch (e) {
  console.log(e);
}

/* 
*  bind method return a new method{copy of original method}  and 
*  'this' will point whatever is passed in the bind method.
*/

var logPersonName = logName.bind(person);

logPersonName("USA");
logPersonName("INDIA");


//CALL it executes the function doesn't create new function

logName.call(person, "AUS");


//Apply method also call the method only difference is that, it accepts arguments in array form.

logName.apply(person, ["UK"]);








// function Borrowing from person object

var person2 = {
  firstName: 'albus',
  lastName: 'wulfrik'
}

console.log(person.getFullName.apply(person2));



// ************* function currying ******************


function multiply(a,b){
  return a*b
}

var multiplyByTwo = multiply.bind(this, 2) // returns a new function with value of a is set to 2
/* Equivalent code 
  var multiplyByTwo= function(b){
    var a= 2;
    return a*b;
  }
*/

console.log(multiplyByTwo(2))    //  4 
console.log(multiplyByTwo(3))    //  6 
console.log(multiplyByTwo(3,10)) //  6    value 10 will be third argument so it won't have any effect



var multiplyByFive = multiply.bind(this, 5);


console.log(multiplyByFive(4))    //  20
console.log(multiplyByFive(6))    // 30




// In react we can use this pattern. currying will be passed to an event 
// In case of bind a new function was created whenever a render function is called for all the eventHandler.
// If we use the currying only one time function will be created.

var currying = (a)=>(b)=>{ console.log(a,b)}

currying(2)(3)