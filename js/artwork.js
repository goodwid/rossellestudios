(function(module) {

  function Art (opts) {
    var pathPrefix = 'images/';
    this.title = opts.title;
    this.media = opts.media;
    this.show = opts.show;
    // this.dimensions = opts.dimensions;
    this.year = opts.year;
    this.path = pathPrefix + opts.filename;
  }

  Art.all = [];

  Art.prototype.toHtml = function() {
    var appTemplate = $('#artwork-template').html();
    var compileTemplate = Handlebars.compile(appTemplate);
    var html = compileTemplate(this);
    return html;
  };

  Art.filter = function(show) {
    Art.all.filter(function(art) {
      return art.show = show;
    });
  };

  Art.initCategories = function() {
    return Art.all.map(function (obj) {
      return obj.show;
    }).sort().reduce(function(prev,curr) {
      if (curr != prev[0]) prev.unshift(curr);
      return prev;
    }, []);
  };


  Art.loadAll = function(rawData) {
    Art.all = rawData.map(function (ele) {
      return new Art(ele);
    });
  };


  // artwork.forEach(function(a) {
  //   $('#past-work').append(a.toHtml());
  // });
  Art.init = function () {
    Art.loadAll(rawData);
  };

  module.Art = Art;
}(window));
