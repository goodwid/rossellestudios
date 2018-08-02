/* globals page, slideshowController, aboutController, contactController */

(function(module) {
  var routes = {};

  routes.setRouteMappings = function() {
    page.base('/');

    page('/', slideshowController.index);
    page('slideshow/:show', slideshowController.index);
    page('about', aboutController.index);
    page('contact', contactController.index);

    page();
  };

  routes.setRouteMappings();

  module.routes = routes;

})(window);
