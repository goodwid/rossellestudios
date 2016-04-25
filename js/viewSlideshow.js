(function(module) {

  var slideshow = {};
  var slideshowView = {};


  slideshow.current = 0;
  slideshow.images = [];
  slideshow.$image = $('#slideshow');
  slideshow.$data = $('#info');


  slideshow.populateSlideshow = function(rawData) {
    slideshow.images = rawData;
  };

  slideshowView.changeImage = function(num) {
    slideshow.current += num;
    console.log(slideshow.$image.parent().height());
    if (slideshow.current > slideshow.images.length - 1) {
      slideshow.current = 0;
    }
    if (slideshow.current <= -1) {
      slideshow.current = slideshow.images.length - 1;
    }
    var data = slideshow.images[slideshow.current].title + ', ' +
               slideshow.images[slideshow.current].show + ',  ' +
               slideshow.images[slideshow.current].year;
    slideshow.$data.val(data);
    slideshow.$image.hide();
    slideshow.$image.attr('src',slideshow.images[slideshow.current].path);
    // slideshow.$image.height(slideshow.$image.parent().height());
    slideshow.$image.fadeIn(600);
  };

  slideshowView.handleButtons = function() {
    $('#prev').on('click', function() {
      slideshowView.changeImage(-1);
    });
    $('#next').on('click', function() {
      slideshowView.changeImage(1);
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
