# pino-udp-transport

[![Build Status](https://travis-ci.org/alexpts/pino-udp-transport.svg?branch=main)](https://travis-ci.org/alexpts/pino-udp-transport)
[![Code Coverage](https://scrutinizer-ci.com/g/alexpts/pino-udp-transport/badges/coverage.png?b=main)](https://scrutinizer-ci.com/g/alexpts/pino-udp-transport/?branch=main)

Simple udp transport for logger Pino

[pino]: https://www.npmjs.com/package/pino

This module provides a "transport" for [pino][pino] that simply forwards
messages to an arbitrary socket. The socket can be UDPv4.

You should install `pino-udp` for ease of use:

```bash
$ npm install pino-udp
```


#### Example

```javascript
const pino = require('pino');
const udpTransport = require('pino-udp');

let options = {
    level: 'info'
};

let logger = pino(options, new udpTransport({
    address: '127.0.0.1',
    port: 12201,
}));

logger.info('test to udp');
```