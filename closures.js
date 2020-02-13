// function greet(whatToSay) {
//   return function(name) {
//     console.log(`${whatToSay} : ${name}`);
//   };
// }

// greet("Hi")("ashfaq");

// var sayHi = greet("Hi");
// // function have access to lexically scoped variable and function  when it is invoked outside of the scope{execution context}

// sayHi("Kranthi");

// function build() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(function() {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// var fs = build();

// fs[0](); //3
// fs[1](); //3
// fs[2](); //3

// // solution1 Old school By using IIFE
// function build2() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function(j) {
//         return function() {
//           console.log(j);
//         };
//       })(i)
//     );
//   }
//   return arr;
// }

// var fs2 = build2();

// fs2[0](); //3
// fs2[1](); //3
// fs2[2](); //3

// // ES6 solution By using let

// function build3() {
//   var arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr.push(function() {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// var fs3 = build3();

// fs3[0](); //0
// fs3[1](); //1
// fs3[2](); //2

// // KYLE SIMPSON deep javascript //
// // closure is preservation of linkage of variable not value

// var teacher = "kyle";

// var myTeacher = function() {
//   console.log(teacher);
// };

// teacher = "Simpson";

// myTeacher();

function test() {
  var data = "SDSD";
  function test1() {
    return (data = 1 + data);
  }
  function test2() {
    return (data = 2 + data);
  }
  function test3() {
    return (data = 3 + data);
  }
  return {
    test1,
    test2,
    test3
  };
}
let z = test();
console.log(z.test1(), z.test2(), z.test3());
