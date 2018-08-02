(function(module) {
  const aboutController = {};
  aboutController.index = function() {
    $('main > section').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
