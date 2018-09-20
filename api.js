var rp = require('request-promise');
var Wsse = require('wsse');

var endpoint;
var key;
var secret;

function init(e, k, s) {
    endpoint = e;
    key      = k;
    secret   = s;
}

function checkInit() {
    if (!endpoint || !key || !secret) {
        throw new Error('API is not initialized');
    }
}

function generateAuthHeader() {
    checkInit();
    var wsse = new Wsse();
    var token = wsse.getUsernameToken(key, secret, {nonceBase64: true});
    return {
        'X-WSSE': 'UsernameToken ' + token
    };

};

function request(method, url, params) {
    checkInit();
    var options = {
        method: method,
        baseUrl: endpoint,
        url: url,
        headers: generateAuthHeader()
    };

    if (method.toLowerCase === 'get') {
        options.qs = params;
    } else {
        options.body = params;
        options.json = true;
    }
    console.log(method + ': ' + endpoint + url);

    return rp(options)
        .then(function(response) {
            console.log(response);
            return response;
        });
};

module.exports = {
    init: init,
    request: request
};
