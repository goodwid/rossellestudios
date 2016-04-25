(function(module) {
  var contactController = {};
  contactController.index = function() {
    $('main > section').hide();
    $('#contact').show();
  };

  module.contactController = contactController;
})(window);
