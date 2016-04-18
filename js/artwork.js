var artwork = [];

function Art (opts) {
  var pathPrefix = 'images/';
  this.title = opts.title;
  this.media = opts.media;
  this.show = opts.show;
  // this.dimensions = opts.dimensions;
  this.year = opts.year;
  this.path = pathPrefix + opts.filename;
}


Art.prototype.toHtml = function() {
  var appTemplate = $('#artwork-template').html();
  var compileTemplate = Handlebars.compile(appTemplate);
  var html = compileTemplate(this);
  return html;
};


rawData.forEach(function(ele) {
  artwork.push(new Art(ele));
});


artwork.forEach(function(a) {
  $('#past-work').append(a.toHtml());
});
