function sayHiLater(){
  var greeting = "Hi!";
  setTimeout(function(){console.log(greeting)}, 2000)
}
sayHiLater()




function tellMeWhenDone(callback){
  var a = 100;
  callback();
}


tellMeWhenDone(function(){console.log("I am Done")})

tellMeWhenDone(function(){alert("I am Done")})


// Have a look a currying.js