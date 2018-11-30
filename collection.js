let collection =[
  1,
  false,
  {
    name: "Ashfaq",
    address: "kalajyothi kondapur",
  },
  function({name, address}={}){
    console.log(`name: ${name}`);
    console.log(`address: ${address}`);
  }
] 


collection[3](collection[2]);