const { EMAIL } = require('../../components/Constants')
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
    to: EMAIL, 
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

  <!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>HTML Template</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
      body {
          width: 100% !important;
          max-width: 600px;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          margin: 0;
          padding: 0;
          line-height: 100%;
      }
  
      [style*="Open Sans"] {font-family: 'Open Sans', arial, sans-serif !important;}
  
      table td {
          border-collapse: collapse;
      }
  
      table {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
      }
  
  </style>
  </head>
  
  <body style="margin: 0; padding: 0;">
      <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff">
          <tr>
              <td colspan="2" style="background-color:#B5190F;text-align: center;">
                  <p style="color:#ffffff">
                      <b>REDAutorent</b>
                  </p>
                  <p style="color:#ffffff;font-size: 24px;">
                      <b>Новая заявка - ${body['auto']}</b>
                  </p>
                  <p style="color:#ffffff">
                      <b>${body['name']} - <a style="color:#ffffff" href="tel:${body['phone']}">${body['phone']}</a></b>
                  </p>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Name:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['name']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Surname:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['surname']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Email:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['email']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Address:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['address']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Phone:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['phone']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>PesonalID:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['personalid']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Auto:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span><b>${body['auto']}</b></span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 25px; padding-left: 5px" colspan="2">
                  <b>Start</b>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Date:</span><br /><span>${body['startdate']}</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Time:</span><br /><span>${body['starttime']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 25px; padding-left: 5px" colspan="2">
                  <b>Stop</b>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Date:</span><br /><span>${body['stopdate']}</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Time:</span><br /><span>${body['stoptime']}</span>
              </td>
          </tr>
          <tr>
              <td colspan="2" style="padding-top: 25px; padding-left: 5px">
                  <span><b>Additionl information:</b></span>
              </td>
          </tr>
          <tr>
              <td colspan="2" style="padding-top: 5px; padding-left: 5px">
                  <span>${body['additional']}</span>
              </td>
          </tr>
      </table>
  </body>
  
  </html>
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