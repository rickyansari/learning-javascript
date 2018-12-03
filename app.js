var g = G$('ashfaq', 'ansari', 'en');

g.greet();

// g.setLanguage("SDSD"); // unsupported language

// Used our chainable functions
g.greet().greet();


g.setLanguage('es');

g.greet().log();

$('#login').click(function(){
  var loginGreetr = G$('ashfaq', 'ansari', 'en'); 
  // hide login from the screen
  $('#logindiv').hide();
  loginGreetr.setLanguage($('#language').val( )).HTMLGreeting('#greeting', true).log()
})