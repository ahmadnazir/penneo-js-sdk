var request = require('request');
var Wsse = require('wsse');

module.exports = function() {

	// Configuration
	var key;
	var secret;
	var endpoint;

	var generateAuthHeader = function() {
		var wsse = new Wsse();
		var token = wsse.getUsernameToken(key, secret, {nonceBase64: true});
		console.log(token);
		return {
			'X-WSSE': 'UsernameToken ' + token
		};

	};

	this.init = function(_key, _secret, _endpoint) {
		key = _key;
		secret = _secret;
		endpoint = _endpoint;

		console.log('Initializing with endpoint: ' + endpoint);
	};

	this.request = function(method, url) {
		var options = {
			url: endpoint + '/' + url,
			headers: generateAuthHeader()
		};
		console.log(method + ': ' + endpoint + '/' + url);

		request(options, function(error, response, body) {
			if (error) {
				console.log('Error :: ' + method + ' : ' + url + ",\n" + error);
				return;
			}
			console.log(response.statusCode);
			console.log(response.headers);
			console.log();
			console.log(body);
		});
	};
}
