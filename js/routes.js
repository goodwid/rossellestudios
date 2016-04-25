(function(module) {
  var routes = {};

  routes.setRouteMappings = function() {
    page.base('/');
    console.log('routes');

    page('/', slideshowController.index);
    page('slideshow/:current', slideshowController.index);
    page('slideshow/:past', slideshowController.index);
    page('about', aboutController.index);
    page('contact', contactController.index);

    page();
  };

  routes.setRouteMappings();

  module.routes = routes;

})(window);
