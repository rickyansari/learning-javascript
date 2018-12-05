// <input onClick={ this.handleClick({ anyValue }) } />
"use strict"

let handleClick = ({ name }) => (e) => {
  console.log(name) // index or id I may want to assign value to
  console.log(this) // the value of the input field
}

let a = handleClick({name: 'Ashfaq'});
let b = handleClick({name: 'Ansari'});

console.log(a.name)
console.log(a === b) 

// In debug check the scope 3 {closure will be different}
// reference to name will be different.
// https://hackernoon.com/curry-away-in-react-7c4ed110c65a
// https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb