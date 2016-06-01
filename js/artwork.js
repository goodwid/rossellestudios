(function(module) {

  function Art (opts) {
    var pathPrefix = 'https://s3-us-west-2.amazonaws.com/rossellestudios/';
    // var pathPrefix = 'sized-images/';

    this.title = opts.title;
    this.media = opts.media;
    this.show = opts.show;
    // this.dimensions = opts.dimensions;
    this.year = opts.year;
    this.path = pathPrefix + opts.filename;
  }

  Art.all = [];

  Art.filter = function(show) {
    return Art.all.filter(function(obj) {
      return show.indexOf(obj.show) > -1;
    });
  };

  Art.initShows = function() {
    Art.current = 'Biomorphic Bowls and Vases';
    var shows = Art.all.map(function (obj) {
      return obj.show;
    })
      .sort().reduce(function(prev,curr) {
        if (curr != prev[0]) prev.unshift(curr);
        return prev;
      }, []);
    Art.past = shows.filter(function(a) {
      return a !== Art.current;
    });
    return shows;
  };

  Art.loadAll = function(rawData) {
    Art.all = rawData.map(function (ele) {
      return new Art(ele);
    });
  };

  Art.fetchAll = function () {
    var url = '/data/artwork.json';

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
            localStorage.rawData = JSON.stringify(rawData);
            localStorage.eTag = eTag;

            Art.loadAll(rawData);
            Art.shows = Art.initShows();
            artworkView.initIndexPage();
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
