'use strict';

const { capturaPantalla } = require('./captura-pantalla');
const { base64_encode } = require('./conversor-base-64');
const { comparar } = require ('./comparador');
const { notificar } = require ('./notificador');

const fs = require ('fs');

capturaPantalla('http://www.xvideos.com')
    .then( path => {
        const b64 = base64_encode(path);
        const haCambiado = comparar(b64);
        //no son iguales -> notifico
        if (haCambiado){
            const imagenAnterior = {
                base64: haCambiado
            };

            fs.writeFileSync('anterior.json', JSON.stringify(imagenAnterior, null, 4));

            console.log('No son iguales!! Notificando!!!');
            notificar(haCambiado);
        }
        else {
            console.log('Son iguales puto!!');
        }

    });
        

