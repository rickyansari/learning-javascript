function greet(language) {
  return function (firstName, lastName) {
    if (language === 'en') {
      console.log(`Hello ${firstName} ${lastName}`)
    }
    if (language === 'es') {
      console.log(`Hola ${firstName} ${lastName}`)
    }
  }
}

var englishGreeting = greet('en');
var spanishGreeting = greet('es');
// value of language will be available in the closure;

englishGreeting('Charles', 'charli');
spanishGreeting('pablo', 'paul');