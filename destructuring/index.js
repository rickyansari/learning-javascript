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
var tmp = data();
var first = temp[0];
