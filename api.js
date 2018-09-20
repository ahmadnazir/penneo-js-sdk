var request = require('request');
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

function call(method, url) {
    checkInit();
    var options = {
        url: endpoint + '/' + url,
        headers: generateAuthHeader()
    };
    console.log(method + ': ' + endpoint + '/' + url);

    request(options, function(error, response, body) {
        if (error) {
            log('Error :: ' + method + ' : ' + url + ",\n" + error);
            return;
        }
        // console.log(response.statusCode);
        // console.log(response.headers);
        console.log(body);
    });
};

module.exports = {
    init: init,
    request: call
};
