const dgram = require('dgram');
const pino = require('pino');
let jestGlobal = require("@jest/globals");

const udpPino = require('../../index');

let { beforeEach, afterEach, it, beforeAll, afterAll } = jestGlobal;

let port = 12201;

it('send to udp stream', async () => {
    let options = { name: 'test-logger' };
    let transport = new udpPino({
        address: '127.0.0.1',
        port: port,
    });
    let logger = pino(options, transport);

    logger.info({ name: 'alex' }, 'Test message');

    let server = dgram.createSocket('udp4');
    server.bind(port);

    let log = await new Promise(resolve => {
        server.on('message', msg => {
            resolve(JSON.parse(msg));
        });
    });

    expect('alex').toStrictEqual(log.name);
    expect('Test message').toStrictEqual(log.msg);

}, 100);
