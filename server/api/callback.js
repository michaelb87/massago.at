const axios = require('axios');
const { loggers } = require('winston')
const logger = loggers.get('main')

export default function (req, res, next) {
    if (req.method == 'POST') {
        const reqBody = req.body
        let respBody = {
            'email': process.env.PUSHBULLET_RECIPIENT,
            'type': 'note',
            'title': 'Rückruf erbeten',
            'body': `Anfrage von ${reqBody.name}. Ersucht Rückruf ${reqBody.slot}. Notiz: ${reqBody.note}, Tel: +43${reqBody.phone}`
        }
        axios({
            method: 'post',
            url: 'https://api.pushbullet.com/v2/pushes',
            data: JSON.stringify(respBody),
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': process.env.PUSHBULLET_TOKEN
            },
            json: true
        })
            .then(resp => {
                logger.info({type: 'pushbullet', payload: respBody})
                res.send(JSON.stringify({ 'success': true }))
            }).catch(resp => {
                logger.error({type: 'pushbullet', payload: resp})
                res.send(JSON.stringify({ 'success': false }))
            });

    } else {
        res.send('admin notified')
    }
    next()
}