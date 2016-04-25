(function(module) {
  var slideshowController = {};
  Art.fetchAll();
  var current = 'Biomorphic Bowls and Vases';
  slideshowController.index = function(ctx) {
    $('main > section').hide();
    $('#slideshow').show();
    slideshow.populateSlideshow(Art.filter(Art.shows));
    slideshowView.changeImage(100);
    console.log(ctx);
  };

  module.slideshowController = slideshowController;
})(window);
