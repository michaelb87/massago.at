
const axios = require('axios');

export default function (req, res, next) {
    const reqBody = req.body
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
                // todo log
                res.send(JSON.stringify({ 'success': true }))
            }).catch(resp => {
                res.send(JSON.stringify({ 'success': false }))
            });

    } else {
        res.send('admin notified')
    }
}