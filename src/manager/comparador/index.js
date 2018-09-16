'use strict';

const fs = require ('fs');

const comparar = base64Nuevo => {

    try {
        const data = JSON.parse(fs.readFileSync('anterior.json', 'utf8'))
        return data.base64.localeCompare(base64Nuevo) !== 0
            ? base64Nuevo
            : null
    }
    catch (err) {
        console.log(err);
        const imagenAnterior = {
            base64: base64Nuevo
        };
        fs.writeFileSync('anterior.json', JSON.stringify(imagenAnterior, null, 4));
        return null;
    }
};

module.exports.comparar = comparar;
