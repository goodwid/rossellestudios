/* globals Art, artworkView,  slideshow, slideshowView */

(function(module) {
  var slideshowController = {};

  const callback = (data) => {
    Art.loadAll(data);
    Art.shows = Art.initShows();
    artworkView.initIndexPage();
  };

  Art.fetchAll(callback);

  slideshowController.index = function(ctx) {
    $('main > section').hide();
    $('#slideshow').show();
    var show = ctx.params.show;

    switch (show) {
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
  };

  module.slideshowController = slideshowController;
})(window);
