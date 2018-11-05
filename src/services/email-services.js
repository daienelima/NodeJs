'use strict';

var config = require('../config');
var sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(config.sendgridKey);

exports.send = async(to, subject, body) => {
    try {
        const msg = {
            to: to,
            from: 'Daiene@testes.com',
            subject: subject,
            html: body,
        };
        sendgrid.send(msg);
    } catch (error) {
        console.log(error);   
    }
}