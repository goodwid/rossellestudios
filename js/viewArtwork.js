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

  // artworkView.handleMainNav = function() {
  //   $('nav ul').on('click','.tab', function(event) {
  //     event.preventDefault();
  //     var target = $(this).find('a').attr('href');
  //     console.log(target);
  //     $('main > div > section').each(function() {
  //       $(this).hide();
  //     });
  //     $($(this).find('a').attr('href')).show();
  //   });
  // };

  artworkView.setRouteMappings = function() {
    function foo() {
      console.log('foo!');
    }
    var $mds = $('main > section');
    var $sf = $('#show-filter');
    page.base('/');

    page ('', foo);
    page('current', function() {
      $mds.each(function() {
        $(this).hide();
      });
      $sf.hide();
      $('#artwork').show();
      slideshow.populateSlideshow(Art.filter('Biomorphic Bowls and Vases'));
      slideshowView.changeImage(100);
    });
    page('past', function() {
      $mds.each(function() {
        $(this).hide();
      });
      $('#artwork').show();
      $sf.show();
      slideshow.populateSlideshow(Art.filter(Art.shows));
      slideshowView.changeImage(100);
    });
    page('about', function() {
      $mds.each(function() {
        $(this).hide();
      });
      $('#about').show();
    });
    page('contact', function() {
      $mds.each(function() {
        $(this).hide();
      });
      $('#contact').show();
    });
    page('*', foo); // Catch-all

    page();
  };

  artworkView.initIndexPage = function() {
    artworkView.populateFilter();
    artworkView.handleFilter();
    artworkView.setRouteMappings();
    // artworkView.handleMainNav();
    slideshowView.init(Art.all);
  };

  module.artworkView = artworkView;
}(window));
