'use strict';
var bunyan = require('bunyan');

if (!log) {
  var log = bunyan.createLogger({
    name: 'Ziplink',
    level: 'info',
  });
}

module.exports = exports = log;