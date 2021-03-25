const dgram = require('dgram');
const stream = require('stream');

module.exports = class UdpTransport {

    constructor(options = {}) {
        const socket = dgram.createSocket('udp4');

        const params = {
            address: '127.0.0.1',
            port: 12201,
            ...options
        };

        return new stream.Writable({
            close: socket.close,
            write(data, encoding, done) {
                socket.send(data, 0, data.length, params.port, params.address, done);
            }
        });
    }
};
