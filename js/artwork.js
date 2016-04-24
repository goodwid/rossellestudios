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

  Art.filter = function(show) {
    return Art.all.filter(function(art) {
      return art.show == show;
    });
  };

  Art.initShows = function() {
    return Art.all.map(obj => obj.show)
      .sort().reduce(function(prev,curr) {
        if (curr != prev[0]) prev.unshift(curr);
        return prev;
      }, []);
  };

  Art.loadAll = function(rawData) {
    Art.all = rawData.map(ele => new Art(ele));
  };

  Art.fetchAll = function () {
    var url = 'data/artwork.json';

    var jqXHR = $.ajax({
      url: url,
      type: 'HEAD',
      dataType: 'json',
      success: function () {
        var eTag = jqXHR.getResponseHeader('ETag');
        if ((localStorage.eTag === eTag) && (localStorage.rawData)) {
          Art.loadAll(JSON.parse(localStorage.rawData));
          Art.shows = Art.initShows();
          artworkView.initIndexPage();
        } else {
          $.getJSON(url)
          .done(function(rawData) {
            Art.loadAll(rawData);
            Art.shows = Art.initShows();
            artworkView.initIndexPage();
            localStorage.rawData = JSON.stringify(rawData);
            localStorage.eTag = eTag;
          })
          .fail(function() {
            console.log('getJSON failed, check JSON format or file presence.');
          });
        }
      }
    });
  };

  module.Art = Art;
}(window));
