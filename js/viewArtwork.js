(function(module) {
  var artworkView = {};

  artworkView.populateFilter = function() {
    var val = {
      data: ''
    };
    var optionTag = '';
    var appTemplate = $('#selector-template').html();
    var compileTemplate = Handlebars.compile(appTemplate);
    var $sf = $('#show-filter');

    Art.shows.sort().forEach(function (a) {
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

  artworkView.handleMainNav = function() {
    $('nav ul').on('click','.tab', function(event) {
      event.preventDefault();
      $('main > div > section').each(function() {
        $(this).hide();
      });
      $($(this).find('a').attr('href')).show();
    });
  };

  $(document).ready(function () {
    artworkView.populateFilter();
    artworkView.handleFilter();
    artworkView.handleMainNav();
  });

  module.artworkView = artworkView;
}(window));
