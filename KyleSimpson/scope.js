var anotherTeacher = function teacher() { console.log(teacher) }
function makingBlockScope() {
  try {
    let name = "Ashfaq";
    var scope = "function scope"
  } catch (e) {
    console.log(scope)
  }
  console.log(scope)
}


makingBlockScope()
var mobile = { brand: "vivo", modal: "v11 pro", }
console.log(mobile);
mobile.color = "blue"