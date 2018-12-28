const greet = require("./moduler/Pattern1");
greet();

const greet2 = require("./moduler/pattern2");
greet2.greet();

const greet2_1 = require("./moduler/pattern2").greet;
greet2_1();

// Using ES6 Destructuring.
const { greet: greet2_2 } = require("./moduler/pattern2");
greet2_2();

const greet3 = require("./moduler/pattern3");
greet3.greet();

// we are changing the name property of greet3 Object. It will affect  all the requires.
greet3.name = "changed Hello !!";

const greet3_1 = require("./moduler/pattern3");

greet3_1.greet(); // Ashfaq Ansari

const greet4 = require("./moduler/pattern4");
var grt4 = new greet4();
grt4.greet();
// we are changing the name property of grt4 Object. it won't affect the further requires.
grt4.name = "changed Hello !!!";

const greet4_1 = require("./moduler/pattern4");
var grt4_1 = new greet4_1();
grt4_1.greet();

const greet5 = require("./moduler/pattern5");
greet5.greet();

const greet5_1 = require("./moduler/pattern5").greet;
greet5_1();

const { greet: greet5_2 } = require("./moduler/pattern5");
greet5_2();
