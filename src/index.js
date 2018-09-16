'use strict';

const {
    capturaPantalla
    , base64_encode
    , comparar
    , notificar
} = require('./manager');

const {
    TTL
    , URL
} = require ('./env');

const fs = require ('fs');

capturaPantalla(URL)
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
        
