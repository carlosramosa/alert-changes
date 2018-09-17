'use strict';

const TTL = process.env.TTL || 15000;

const RECIPIENT = process.env.RECIPIENT;

const URL = process.env.URL || 'http://www.xvideos.com';

const USER = process.env.USER;

const PASS = process.env.PASS;

const MESSAGE = process.env.emailMessage || 'Ha habido cambios!!';


module.exports = {
    RECIPIENT
    , TTL
    , URL
    , MESSAGE
    , PASS
    , USER
};
