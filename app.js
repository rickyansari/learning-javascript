var g = G$('ashfaq', 'ansari', 'en');

g.greet();

// g.setLanguage("SDSD"); // unsupported language

g.greet().greet(); // chanable functions


g.setLanguage('es');

g.greet().log();