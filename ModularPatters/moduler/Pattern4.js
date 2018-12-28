console.log("\npattern4 is required");

function Greet(){
    this.name = "Hello !!!",
    this.greet = function(){
        console.log(this.name);
    }
}

module.exports = Greet;