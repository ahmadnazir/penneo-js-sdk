var config = require('./config.json');
var api = require('./api.js');

api.init(config.endpoint, config.key, config.secret);
api.request('GET', 'user');
