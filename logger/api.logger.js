const logger = require('loglevel');

class APILogger {

    info(message) {
        logger.info(message);
    }

    info(message, data) {
        logger.info(`${message}   ${undefined != data ? JSON.stringify(data) : ''}`);
    }

    error(message) {
        logger.error(message);
    }
}

module.exports = new APILogger();
