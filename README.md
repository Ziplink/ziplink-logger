# ziplink-logger
Logging module for Ziplink

## Using ziplink-logger

ziplink-logger is essentially just a wrapper for Bunyan, it is housed in it's own module to allow for future extension.

To use ziplink-logger, require the module and then call any of the log functions

    var log = require('ziplink-logger');
    
    log.trace('Very verbose');
    log.debug('Slightly less verbose');
    log.info('Detail on regular operation');
    log.warn('Non critical warnings');
    log.error('Request-fatal error, can continue to serve requests');
    log.fatal('App-fatal error');