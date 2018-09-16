'use strict';

const nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'notificacionesidealista@gmail.com',
        pass: 'arenalesdelsol'
    }
});

const mailOptions = base64 => {
    try {
        const html = fs.readFileSync('./notificador/template/index.html', {encoding: 'utf-8'});
        const template = handlebars.compile(html);
        const replacements = {
            img: base64
        };
        const htmlToSend = template(replacements);
        // var template = fs.readFileSync('./template/index.html',{encoding:'utf-8'});
        return {
            from: 'notificacionesidealista@gmail.com', // sender address
            to: 'carlosramos.cramos@gmail.com', // list of receivers
            subject: 'Nuevos pisitos!!', // Subject line
            html:  htmlToSend
        }
    }
    catch (error) {
        console.log (error);
    }
};

const notificar = base64 => {
    
    transporter.sendMail(mailOptions(base64), function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
};

module.exports.notificar = notificar;
