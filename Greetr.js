(function (global, $) {

  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init({ firstName, lastName, language })
  };
  var supportedLanguages = ['en', 'es'];
  var greetings = {
    en:'Hello',
    es:'Hola'
  };

  var formalGreetings = {
    en:'Greetings',
    es:'Saludos'
  };
 
  var logMessages = {
    en:'LoggedIn',
    es:'iniciar sesión'
  }

  Greetr.prototype = {
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
    validate: function(){
      if(!supportedLanguages.includes(this.language)){
        throw new Error('unsupported language');
      }
    },

    greeting: function(){
      return `${greetings[this.language]} ${this.firstName} !`;
    },

    formalGreetings: function(){
      return `${formalGreetings[this.language]} ${this.fullName()}`;
    },
    
    greet: function(formal){
      var msg;
      if(formal){
        msg = this.formalGreetings()
      }else{
        msg = this.greeting()
      }
      if(console){
        console.log(msg);
      }
      return this;
    },

    log: function(){
      if(console){
        console.log(`${logMessages[this.language]}: ${this.fullName()}`);
      }
      return this;
    },

    setLanguage : function(newlanguage){
      this.language = newlanguage;
      this.validate();      
      return this
    }
  };

  Greetr.init = function ({ firstName = '', lastName = '', language = 'en' }) {
    var self = this;
    self.firstName = firstName;
    self.lastName = lastName;
    self.language = language;
    return self
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
  return Greetr;

})(window, jQuery);