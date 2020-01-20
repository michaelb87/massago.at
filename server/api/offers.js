const axios = require('axios');
const { loggers } = require('winston')
const logger = loggers.get('main')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_SERVER,
    port: 587,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
})

function sendConfirmEmail(res, reqBody) {
    const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_TO,
        subject: 'Angebot Bestellung erhalten!',
        text: JSON.stringify(reqBody)
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(400).send(JSON.stringify({
                status: 'error'
            }))
        } else {
            res.send(JSON.stringify({
                status: 'success'
            }))
        }
    })
}


export default function (req, res, next) {
    if (req.method == 'POST') {
        const reqBody = req.body
        logger.info({ type: 'offer_received', msg: 'offer received', payload: reqBody })

        req.app.offers.findOne({ _offer: req.query.offer }, function (err, offer) {
            if (offer) {
                req.app.offers.update({ _offer: req.query.offer }, { $push: { orders: reqBody } }, {}, function () {

                    sendConfirmEmail(res, reqBody)
                });
            } else {
                res.send(JSON.stringify({ stats: 'error', error: 'Angebot nicht gefunden.' }))

            }
        })
    } else {
        if (req.query.add) {
            req.app.offers.insert({
                _offer: req.query.add,
                max: req.query.max || 5,
                orders: []
            })

        }
        if (req.query.offer) {
            req.app.offers.findOne({ _offer: req.query.offer }, function (err, offer) {
                if (offer) {
                    let rsp = {
                        orders: offer.orders.length
                    }
                    res.send(JSON.stringify(rsp))
                } else {
                    res.send('use a valid offer id!')
                }

            })
        } else {
            req.app.offers.find({}, function (err, docs) {
                let allOffers = docs.map(doc => (doc._offer))
                res.send(allOffers)

            })

        }

    }
}