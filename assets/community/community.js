var _ = require('underscore'),
		fs = require('fs'),
		github = require('octonode');

var githubSecretKey = '47982605165387198cdb36a181baa1a78bc10f3a',
		teamList = ['codeforseoul', 'peace-code', 'teampopong'],
		events = [];

var client = github.client(githubSecretKey);

function getJsonValues(a, target) {
	for (key in a) {
		if(typeof a[key] == 'object') {
			getJsonValues(a[key], target);
		} else {
			target[key] = a[key];
		}
	}
}

function fixEvent(event) {
	var fixedEvent = {};
	getJsonValues(event, fixedEvent);
	return fixedEvent;
}

function getAllEvents (teams, callback) {
	var file = fs.createWriteStream("./community.csv");

	// loop team list to get events of a team
	_.each(teams, function (team, index, list) {
		if(index == teamList.length-1) {
			getEvents(team, function () {
				callback(events, file);
			})
		} else {
			getEvents(team, function () {
				return;
			})
		}
	})
}

function getEvents (team, callback) {
	client.get('/orgs/' + team + '/events', {}, function (err, status, body, headers) {
		if (err) { return new Error(err) };

		body = _.map(body, function(el) {
			return fixEvent(el);
		});
		events = events.concat(body);
		callback();
	})
}

function writeCsv (events, file) {
	file.on('error', function (err) {});
	file.write("id, type, login, gravatar_id, url, avatar_url, name, push_id, created_at \n");

	events.sort(function(a,b){return Number(new Date(b.created_at)) - Number(new Date(a.created_at));});
	_.each(events, function (event) {
		file.write(_.toArray(event).slice(0, 8).join(', ') + ', ' + event["created_at"] + '\n');
	})

	file.end();
}

getAllEvents(teamList, writeCsv);
