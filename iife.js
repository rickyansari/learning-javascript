// Function declaration or Function statement
function greet(name){
  console.log(`Hello ${name}`);
}
greet('ashfaq')



// Function Expression { function is created on the fly}  
// Expression Returns something
var greetName = function(name){
  console.log(`Hello ${name}`);
};

greetName('ansari');

// IIFE Immediately invoking function expression 
//VERSION 1
(function(name){
  console.log(`Hello ${name}`);
}('Walter'));

//VERSION 2

(function(name){
  console.log(`Hello ${name}`);
})('Walter');




