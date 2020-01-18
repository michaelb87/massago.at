const { loggers } = require('winston')
const nodemailer = require('nodemailer')
const { defaultState } = require('../../shared/defaultState')

const logger = loggers.get('main')
const state = defaultState()


const transporter = nodemailer.createTransport({
    host: process.env.MAIL_SERVER,
    port: 587,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
})


export default function (req, res, next) {
    if (req.method == 'POST') {
        const reqBody = req.body
        logger.info({ type: 'voucher_received', payload: reqBody })

        const voucherDetails = () => {
            return reqBody.vouchers.map((v) => {
                return `Gutschein Template: ${state.vouchers[v.voucherId].name}
                Von: ${v.data.from}
                Für: ${v.data.to}
                Wert: ${state.tarifs[v.data.tarif_id].price} Euro
                Nachricht:
                ${v.data.message}
                `
            })
        }

        const msg = `Hurra, Gutscheine verkauft!

        Es wurden Gutscheine im Wert von ${reqBody.total_amount} Euro bestellt.

        Rechnungsempfänger Name: ${reqBody.rname}
        E-Mail: ${reqBody.remail}
        Telefon: ${reqBody.rtel}
        Rechnungsempfänger Adresse: 
        ${reqBody.raddr}
        An selbe Adresse senden: ${reqBody.v_rec_same ? 'ja' : 'nein, andere'}
        Gutscheinempfänger Name: ${reqBody.vname}
        Gutscheinempfänger Adresse: 
        ${reqBody.vaddr}

        ------------------
        Gutschein Details:

        ${voucherDetails()}
        `.replace(/    +/g, '');

        const mailOptions = {
            from: process.env.MAIL_USERNAME,
            to: process.env.MAIL_TO,
            subject: 'Gutscheinbestellung erhalten :)',
            text: msg
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                logger.error({ type: 'voucher_email_error', payload: reqBody })
                res.status(400).send(JSON.stringify({
                    status: 'error'
                }))
            } else {
                logger.info({ type: 'voucher_info', 'msg': 'email sent' })
                res.send(JSON.stringify({
                    status: 'success'
                }))
            }
        })

    } else {
        res.send('admin notified')
    }
}