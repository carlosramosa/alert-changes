'use strict';

const { capturaPantalla } = require('./captura-pantalla');
const { base64_encode } = require('./conversor-base-64');
const { comparar } = require ('./comparador');
const { notificar } = require ('./notificador');

module.exports = {
    capturaPantalla
    , base64_encode
    , comparar
    , notificar
};
