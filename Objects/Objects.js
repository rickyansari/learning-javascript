/* use strict */
var obj1 = {
  name: "cat"
};

var obj2 = Object.create({});

var obj3 = Object.create({ name: "cat" });

debugger;

console.log(obj1, obj2, obj3);

/*
 * An Object  have 4 properties
 * 1. Values:
 * 2. Flags:
 *  a.) writable: if true you can update the property otherwise readOnly; {this can be reconfigured}
 *  b.) configurable: if true you can delete update and change the property; {}
 *  c.) enumerable: if true you will get this property while looping over it otherwise not;
 */
