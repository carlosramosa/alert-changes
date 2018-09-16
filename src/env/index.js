'use strict';

const recipient = process.env.recipient || 'carlosramos.cramos@gmail.com';

const TTL = process.env.TTL || 600000;

const URL = process.env.URL || 'http://www.xvideos.com';

const emailMessage = process.env.emailMessage || 'Ha habido cambios!!';

module.exports = {
    recipient
    , TTL
    , URL
    , emailMessage
};