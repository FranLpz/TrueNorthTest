const nodemailer = require('nodemailer');

const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'flopez@teravisiontech.com',
        pass: 'v19224576'
    }
});

module.exports = {
    sender
};