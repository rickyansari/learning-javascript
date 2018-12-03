(function (global, $) {

  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init({ firstName, lastName, language })
  }

  Greetr.prototype = {

  }

  Greetr.init = function ({ firstName = '', lastName = '', language = 'en' }) {
    var self = this;
    self.firstName = firstName;
    self.lastName = lastName;
    self.language = language;
    return self
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
  return Greetr;

})(window, jQuery);