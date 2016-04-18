var artworkView = {};

artworkView.populateFilter = function() {
  var val = {
    data: ''
  };
  var optionTag = '';
  var appTemplate = $('#selector-template').html();
  var compileTemplate = Handlebars.compile(appTemplate);

  $('figure').each(function () {
    val.data = $(this).attr('data-category');
    optionTag = compileTemplate(val);
    if ($('#show-filter option[value="' + val.data + '"]').length === 0) {
      $('#show-filter').append(optionTag);
    }
  });
};

artworkView.handleFilter = function() {
  var $cf = $('#category-filter');
  var $pwf = $('#past-work figure');
  $cf.on('change', function() {
    if ($(this).val()) {
      $pwf.each(function() {
        $(this).hide();
      });

      $pwf.filter(function() {
        return $(this).attr('data-category') == $cf.val();
      }).show();
    } else {
      $pwf.each(function() {
        $(this).show();
      });
    }
  });
};


artworkView.handleMainNav = function() {
  $('nav ul').on('click','.tab', function(event) {   // Class needed here to differentiate li elements from other links in the nav bar.
    event.preventDefault();
    $('main > div > section').each(function() {
      $(this).hide();
    });
    $($(this).find('a').attr('href')).show();

    // if ($(this).find('a').attr('href') === '#about') {
    //   $('header p').css('opacity','0');
    // } else {
    //   $('header p').css('opacity','1');
    // }
    // if($('.icon-menu').is(':visible')) {
    //   $('nav ul').hide();
    // }
  });
};





$(document).ready(function () {
  artworkView.populateFilter();
  artworkView.handleFilter();
  artworkView.handleMainNav();
});
