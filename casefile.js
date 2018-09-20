var validate = require('jsonschema').validate;
var schema = require('./resources/schema/package.json');

var api;

function hasErrors(package) {
    var r = validate(package, schema);
    if (r.errors.length == 0) {
        return false;
    }
    console.log('Case file has errors:');
    r.errors.map(function(error) {
        console.log('- ', error.message);
    });
    return true;
};

function create(package) {
    if (hasErrors(package)) {
        return;
    }
    api.request('post', 'packages', package);
};

function init(a) {
    api = a;
}

module.exports = {
    init: init,
    create: create
};
