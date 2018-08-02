/* globals Art, slideshow, slideshowView*/

(function(module) {
  const artworkView = {};

  artworkView.populateFilter = function() {
    const val = {data: ''};
    let optionTag = '';
    const appTemplate = $('#selector-template').html();
    const compileTemplate = Handlebars.compile(appTemplate);
    const $sf = $('#show-filter');

    Art.shows.sort().forEach(function(a) {
      val.data = a;
      optionTag = compileTemplate(val);
      $sf.append(optionTag);
    });
  };

  artworkView.handleFilter = function() {
    var $cf = $('#show-filter');
    $cf.on('change', function() {
      if (!$(this).val()) {
        slideshow.populateSlideshow(Art.shows);
      } else {
        slideshow.populateSlideshow(Art.filter($(this).val()));
      }
      slideshowView.changeImage(100); // force past the end of the length, where it starts over at 0.
    });
  };

  artworkView.initIndexPage = function() {
    artworkView.populateFilter();
    artworkView.handleFilter();
    slideshowView.init(Art.filter(Art.current));
  };

  module.artworkView = artworkView;
}(window));
