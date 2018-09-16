'use strict';

const fs = require('fs');

// function to encode file data to base64 encoded string
const base64_encode = (file) => {
    // read binary data
    const bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

module.exports.base64_encode = base64_encode;
