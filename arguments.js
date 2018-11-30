

function printUserDetails(firstName, lastName, mobile){
  console.log(`\n\n`);
  console.log(`firstName: ${firstName}`)
  console.log(`lastName: ${lastName}`)
  console.log(`mobile: ${mobile}`)
  console.log(`length:  ${arguments.length}`);
  console.log(`arguments ${JSON.stringify(arguments)}`)
}

printUserDetails();
printUserDetails('ashfaq');

function printUserDetailsWithDefault({firstName="Mohammed", lastName="ansari", mobile=94899978789789}={}){
  console.log(`\n\n`);
  console.log(`firstName: ${firstName}`)
  console.log(`lastName: ${lastName}`)
  console.log(`mobile: ${mobile}`)
}

printUserDetailsWithDefault();
printUserDetailsWithDefault({firstName:'ashfaq'});
printUserDetailsWithDefault({lastName:'ANSARI'});
printUserDetailsWithDefault({mobile:91281982091});

