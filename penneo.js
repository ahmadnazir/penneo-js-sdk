var api      = require('./api.js');
var casefile = require('./casefile.js');

function init(endpoint, key, secret) {
    api.init(endpoint, key, secret);
    casefile.init(api);
}

module.exports = {
    init: init,
    request: api.request,
    casefile: casefile
}
