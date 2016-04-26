(function(module) {
  var slideshowController = {};
  Art.fetchAll();
  slideshowController.index = function(ctx) {
    $('main > section').hide();
    $('#slideshow').show();
    switch (ctx.params.show) {
    case 'current': {
      slideshow.populateSlideshow(Art.filter(Art.current));
      $('#show-filter').hide();
      break;
    }
    case 'past': {
      slideshow.populateSlideshow(Art.filter(Art.past));
      $('#show-filter').show();
      break;
    }
    }
    slideshowView.changeImage(100);
    console.log(ctx.params.show);
  };

  module.slideshowController = slideshowController;
})(window);
