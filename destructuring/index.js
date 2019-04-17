function getData() {
  return [
    {
      name: "kyle",
      email: "kyle@gmail.com",
      full_name: "hesam sameni",
      avatar: "https://aaa/file/image/hesamsameni.jpeg",
      rate: "0.0",
      phone: [],
      location: {
        name: "something",
        lat: 00,
        long: 00,
        address: "something",
        distance: 00
      },
      about: {
        quote: "something",
        bio: "something"
      },
      topics: {
        a: "a",
        b: "b",
        c: "c",
        d: "d"
      },
      stats: {
        a: 10,
        b: 0,
        c: 0,
        d: 0,
        e: 0
      }
    },
    {
      name: "simpson",
      email: "simpson@gmail.com",
      full_name: "hesam sameni",
      avatar: "https://aaa/file/image/hesamsameni.jpeg",
      rate: "0.0",
      phone: [],
      location: {
        name: "something",
        lat: 00,
        long: 00,
        address: "something",
        distance: 00
      },
      about: {
        quote: "something",
        bio: "something"
      },
      topics: {
        a: "a",
        b: "b",
        c: "c",
        d: "d"
      },
      stats: {
        a: 10,
        b: 0,
        c: 0,
        d: 0,
        e: 0
      }
    }
  ];
}

(function() {
  const [
    { name: firstName, email: firstEmail },
    { name: secondName, email: secondEmail = "getify@gmail.com" }
  ] = getData();

  console.log(
    `firstEmail : ${firstEmail}
    firstName: ${firstName} 
    secondEmail:${secondEmail} 
    secondName: ${secondName}`
  );
})();

function initializeMultiple() {
  return [1, 2, 3];
}

// handling undefined  and default value
(function() {
  const [first, second, third, forth = 4] = initializeMultiple() || [];
  console.log(first, second, third, forth);
})();

// gathering rest of values after destructuring in a variable
(function() {
  const [one, two, ...rest] = initializeMultiple();
  console.log(one, two, rest);
})();
