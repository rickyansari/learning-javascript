function* main() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

var iterator = main() // generator function returns the iterator.

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log([...main()])


// Making an object iterable

var obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key]
    }
  }
}
console.log([...obj])




// should print 0..100 by 1s
var numbers = {
  num: 0,
  *[Symbol.iterator]() {
    while (this.num <= 100) yield this.num++;
    return
  }

}

for (let num of numbers) {
  console.log(num)
}

var specialNumbers = {
  *[Symbol.iterator]({ startPoint = 0, endPoint = 100, stepCount = 1 }) {
    while (startPoint <= endPoint) {
      yield startPoint
      startPoint += stepCount;
    }
    return
  }
};

console.log(`My lucky numbers are: ${
  [...specialNumbers[Symbol.iterator]({
    startPoint: 6, endPoint: 38, stepCount: 4
  })]
  }`);



