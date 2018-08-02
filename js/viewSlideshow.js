(function(module) {

  var slideshow = {};
  var slideshowView = {};

  slideshow.current = 0;
  slideshow.images = [];
  slideshow.$image = $('#slideshow-image');
  slideshow.$data = $('#info');


  slideshow.populateSlideshow = function(rawData) {
    slideshow.images = rawData;
  };

  slideshowView.changeImage = function(num) {
    slideshow.current += num;
    if (slideshow.current > slideshow.images.length - 1) {
      slideshow.current = 0;
    }
    if (slideshow.current <= -1) {
      slideshow.current = slideshow.images.length - 1;
    }
    var data = slideshow.images[slideshow.current].title + ', ' +
               slideshow.images[slideshow.current].show + ',  ' +
               slideshow.images[slideshow.current].year;
    slideshow.$data.text(data);
    slideshow.$image.hide();
    slideshow.$image.css('background-image', 'url(' + slideshow.images[slideshow.current].path + ')');
    slideshow.$image.show();
  };

  slideshowView.handleButtons = function() {
    $('#left-side, #button-left').on('click', function() {
      slideshowView.changeImage(-1);
    });
    $('#right-side, #button-right').on('click', function() {
      slideshowView.changeImage(1);
    });
    $(document).keydown(function(e) {
      // e.preventDefault();
      switch(e.which) {
      case 37: {
        slideshowView.changeImage(-1);
        break;
      }
      case 39:{
        slideshowView.changeImage(1);
        break;
      }
      default: return;
      }
    });
  };

  slideshowView.init = function(show) {
    slideshowView.handleButtons();
    slideshow.populateSlideshow(show);
    slideshowView.changeImage(0);
  };

  module.slideshow = slideshow;
  module.slideshowView = slideshowView;
}(window));
