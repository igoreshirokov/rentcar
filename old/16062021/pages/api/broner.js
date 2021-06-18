const fs = require('fs')
const sendmail = require('sendmail')({
    logger: {
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error
    },
    silent: false,
    // dkim: { // Default: False
    //   privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
    //   keySelector: 'mydomainkey'
    // },
    // devPort: 1025, // Default: False
    // devHost: 'localhost', // Default: localhost
    smtpPort: 2525, // Default: 25
    smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
  })
  



export default (req, res) => {
    const body = JSON.parse(req.body)
    console.log(body)
    const mail = `
        <h1>Broner Car</h1>
        <ul>
        <li>
            Name: ${body.name}
        </li>
        <li>
            Phone: ${body.name}
        </li>
        </ul>
    `
    sendmail({
        from: 'no-reply@tatarchenko.1gb.ru',
        to: 'qusty@yandex.ru',
        subject: 'test sendmail',
        html: mail,
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });
    res.status(200).json({ status: 'ok' })
}
