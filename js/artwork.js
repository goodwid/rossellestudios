/* globals artworkView */

(function(module) {

  function Art (opts) {
    const pathPrefix = 'https://s3-us-west-2.amazonaws.com/rossellestudios/';
    // const pathPrefix = '/sized-images/';

    this.title = opts.title;
    this.media = opts.media;
    this.show = opts.show;
    this.year = opts.year;
    this.path = pathPrefix + opts.filename;
  }

  Art.all = [];

  Art.filter = show => {
    return Art.all.filter(el => {
      return show.indexOf(el.show) > -1;
    });
  };

  Art.initShows = () => {
    Art.current = 'Biomorphics';
    var shows = Art.all.map(el => {
      return el.show;
    })
      .sort().reduce(function(prev,curr) {
        if (curr != prev[0]) prev.unshift(curr);
        return prev;
      }, []);
    Art.past = shows.filter(function(el) {
      return el !== Art.current;
    });
    return shows;
  };

  Art.loadAll = data => {
    Art.all = data.map(el => {
      return new Art(el);
    });
  };

  Art.fetchAll = (callback) => {
    var url = '/data/artwork.json';

    fetch(url)
      .then(results => results.json())
      .then(data => callback(data));
  };

  module.Art = Art;
}(window));
