var config = require('./config.json');
var Penneo = require('./Penneo.js');

var penneo = new Penneo();
penneo.init(config.key, config.secret, config.endpoint);
// penneo.request('GET', 'casefile/message/templates/default');
penneo.request('GET', 'casefiles');
