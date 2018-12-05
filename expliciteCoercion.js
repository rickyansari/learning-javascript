/*   string <-------------------------Number  */

var foo = "123";
var baz = parseInt(foo, 10); // should not be used for parsing
parseInt('100px', 10) // 100
parseInt('px100', 10) //NAN
console.log(baz);


baz = Number(foo);  /* ******* */
console.log(baz);  //123  *************

baz = +foo; // unary + operator  coercion To Number  :it same as writing Number(foo)
console.log(baz);


baz = 345;
foo = baz.toString();
console.log(foo)

foo = String(baz); // This is conveying more effectively the purpose.
console.log(foo)


/*   * <-------------------------> boolean  */

foo = "123"

baz = Boolean(foo); // This is conveying more effectively the purpose.
console.log(baz)

// first Negate do the coercion but also changes the parity so we are applying the second negate to flips the parity // 
// Mostly used 
baz = !!foo 
console.log(baz)

// explicitly implicit
baz =  foo ? true : false;
console.log(baz);


/*   Date <-------------------------Number  */

var now = +new Date(); //Time stamp
//now  = Date.now() // ES5   use this


// ISSUES 


String([]) === ""  // true
String([undefined]) === ""  //true
String([null]) === "" //true
Number('') === 0 //true
Number(false) === 0 //true
Number(true) === 1  //true
Number(null) === 0  //true

