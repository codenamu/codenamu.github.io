var Meetup = Meetup || {};

Meetup.config = {
  groups: [["Code for Seoul", "code-for-seoul", "7c66136c4b2e242d241e289595e3546"]]
}

Meetup.getEvents = function(options) {
  var status = options && options.status || 'upcoming,past',
      desc = options && options.desc || true;

  _.map(this.config.groups, function (group) {
      var url = 'https://api.meetup.com/2/events?&key=' + group[1] + '&sign=true&photo-host=public&desc=' + desc + '&group_urlname='+ group[0] + '&page=2&status=' + status;
      $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(data) {
          console.log(data);
        }
      });
  })

};

window.onload = function() {
  Meetup.getEvents();
};
