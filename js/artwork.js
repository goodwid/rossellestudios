var artwork = [];

function Art = (opts) {
  var pathPrefix = '';
  this.title = opts.title;
  this.media = opts.media;
  this.show = opts.show;
  // this.dimensions = opts.dimensions;
  this.year = opts.year;
  this.path = pathPrefix + opts.filename;
}


rawData.forEach(function(ele) {
  artwork.push(new Art(ele));
});
