const pino = require('pino');
const udpPino = require('../index');

let options = {
    level: 'info'
};

let logger = pino(options, new udpPino({
    address: '127.0.0.1',
    port: 12201,
}));

logger.info('test to udp');