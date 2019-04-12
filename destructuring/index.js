function getSomeRecords() {
  return [
    {
      name: 'kyle',
      email: 'kyle@gmail.com'
    },
    {
      name: 'simpson',
      email: 'simpson@gmail.com'
    }
  ];
}

var [
  { name: firstName, email: firstEmail = 'Default email' },
  { name: secondName, email: secondEmail = 'Default2 email' }
] = getSomeRecords();

console.log(firstName);

function data() {
  return [1, 2, 3];
}

// old approach
var temp = data();
var first = temp[0];

(function gatherRest() {
  const [first, ...rest] = data();
  console.log(first, rest);
})();

(function retainReference() {
  const [first] = (ref = data());
  console.log(first, ref);
})();

(function destructingReturnOriginalObject() {
  const original = ([first] = data());
  console.log(original, first);
})();

//
(function skippingVales() {
  const [first, , last] = data();
})();
