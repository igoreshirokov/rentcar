const fs = require('fs')
const nodemailer = require('nodemailer')

const smtp = {
  host: process.env.GMAIL_HOST,
  port: parseInt(process.env.GMAIL_PORT)
}
const user = {
  username: process.env.GMAIL_USERNAME,
  password: process.env.GMAIL_PASSWORD,
}

async function main(mail) {
  let transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: false, 
    auth: {
      user: user.username, 
      pass: user.password, 
    },
  });

  let info = await transporter.sendMail({
    from: 'redautorentestonia@gmail.com', 
    to: "redautorentestonia@gmail.com", 
    subject: "RED Autorent | " + mail.subject, 
    text: mail.text, 
    html: mail.html, 
  });
}

export default async (req, res) => {
  const body = JSON.parse(req.body)
  const subject = `Broner Car - ${body.auto}`
  const text = `
    ${subject} \n\n
    Name: ${body.name} \n
    Phone: ${body.phone} \n\n
    ${Object.keys(body).map(key => body[key] ? key + ': ' + body[key] + '\n' : key + ': null' + '\n')}
    `

  const html = `
  <h1>${subject}</h1>
  <ul>
  <li>
      Name: ${body.name}
  </li>
  <li>
      Phone: ${body.phone}
  </li>
  </ul>
  <table style="border:1px solid #000000;">
  <tr style="background:grey">
  <th>name</th>
  <th>surname</th>
  <th>email</th>
  <th>address</th>
  <th>phone</th>
  <th>personalid</th>
  <th>auto</th>
  <th>startdate</th>
  <th>starttime</th>
  <th>stopdate</th>
  <th>stoptime</th>
  <th>additional</th>
  </tr>
  <tr>
  <td style="border: 1px solid #000000;">${body['name']}</td> 
  <td style="border: 1px solid #000000;">${body['surname']}</td>
  <td style="border: 1px solid #000000;">${body['email']}</td>
  <td style="border: 1px solid #000000;">${body['address']}</td>
  <td style="border: 1px solid #000000;">${body['phone']}</td>
  <td style="border: 1px solid #000000;">${body['personalid']}</td>
  <td style="border: 1px solid #000000;">${body['auto']}</td>
  <td style="border: 1px solid #000000;">${body['startdate']}</td>
  <td style="border: 1px solid #000000;">${body['starttime']}</td>
  <td style="border: 1px solid #000000;">${body['stopdate']}</td>
  <td style="border: 1px solid #000000;">${body['stoptime']}</td>
  <td style="border: 1px solid #000000;">${body['additional']}</td>
  </tr>
  </table>
    `

  const mail = { text, html, subject }
  // await main(mail)
  await main(mail)
  .then(() => {
    return res.status(200).json({ status: 'ok' })
  })
  .catch((e) => {
    console.error(e)
    res.status(400).json({status: 'error'})
  });
}


