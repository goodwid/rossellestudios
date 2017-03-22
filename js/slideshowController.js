(function(module) {
  var slideshowController = {};

  Art.fetchAll();

  slideshowController.index = function(ctx) {
    $('main > section').hide();
    $('#slideshow').show();
    var show = ctx.params.show;
    // Doesn't work because of async loading of data.
    // if (Art.shows.indexOf(show) > -1) {
    //
    //   slideshow.populateSlideshow(Art.filter(show));
    //   slideshowView.changeImage(100);
    //   console.log('matched');
    //   return;
    // }
    // console.log('matched and this should never show up together.');
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
