(function(module) {
  var contactController = {};

  contactController.index = function() {
    console.log('contact clicked');
    $('main > section').hide();
    $('#contact').show();
  };

  module.contactController = contactController;
})(window);
