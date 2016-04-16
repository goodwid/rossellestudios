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


$(document).ready(function () {
  artwork.populateFilter();
  artworkView.handleFilter();
});
