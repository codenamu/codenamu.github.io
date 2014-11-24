var _ = require('underscore'),
    fs = require('fs'),
    github = require('octonode');

var githubSecretKey = '47982605165387198cdb36a181baa1a78bc10f3a',
    team_list = ['teampopong', 'peace-code', 'codeforseoul'],
    events = [];

var client = github.client(githubSecretKey);

var getEventsByOrg = function (orgs_id) {
  return function (callback) {
    client.get('/orgs/' + orgs_id + '/events', {}, function (err, status, body, headers) {
      if (err) { return new Error(err) }

      body = _.map(body, function (el) {
        var fixedEvent = {};
        removeJsonDepth(el, fixedEvent);
        return fixedEvent;
      })
      events = events.concat(body);
      callback();
    })
  }
}

var removeJsonDepth = function (a, target) {
  for (key in a) {
    if(typeof a[key] == 'object') {
      removeJsonDepth(a[key], target);
    } else {
      target[key] = a[key];
    }
  }
}

var createNewCsv = function (teams, callback) {
  var file = fs.createWriteStream("./community.csv");
  file.on('error', function (err) {});
  file.write("id, type, login, gravatar_id, url, avatar_url, name, push_id, created_at \n");

  _.each(teams, function (team, index, list) {
    if (index == team_list.length-1) {
      var getEventsByThisOrg = getEventsByOrg(team);
      getEventsByThisOrg(function () {
        callback(events, file);
      }); 
    } else { 
      var getEventsByThisOrg = getEventsByOrg(team);
      getEventsByThisOrg(function () {

      });
    }
  })
}

var writeEventsToCsv function (events_list, file) {
  events_list.sort(function(a,b){return Number(new Date(b.created_at)) - Number(new Date(a.created_at));});
  _.each(events_list, function (event) {
    file.write(_.toArray(event).slice(0, 8).join(', ') + ', ' + event["created_at"] + '\n');
  })
  file.end();
}

createNewCsv(team_list, writeEventsToCsv);
