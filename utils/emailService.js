const nodemailer = require("nodemailer");

//Öncelikle mail konfigürasyonumu yazıyorum
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: 'login',
        user: "bakshalirn@code.edu.az",
        pass: "dygbfngbdvkwuaoj",
    },
});

function confirmCodeEmail(userEMail, confirmCode) {
    transporter.sendMail({
        from: 'bakshalirn@code.edu.az',
        to: userEMail,
        subject: "Confirm Code",
        // text: "için confirm code: " + confirmCode,
        html: `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Onay Kodu</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 20px;
            }
            
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 40px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            
            h1 {
              color: #333333;
              margin-top: 0;
            }
            
            h2 {
              color: #333333;
              font-size: 24px;
            }
            
            p {
              color: #666666;
              line-height: 1.6;
              margin-top: 0;
            }
            
            .code {
              background-color: #f9f9f9;
              padding: 10px;
              font-size: 32px;
              font-weight: bold;
              text-align: center;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Onay Kodu</h1>
            <p>Merhaba,</p>
            <p>Onay kodunuz aşağıdaki gibidir:</p>
            <div class="code">${confirmCode}</div>
            <p>Lütfen bu kodu doğrulama sürecinde kullanın.</p>
            <p>İyi günler dileriz!</p>
          </div>
        </body>
        </html>
        `
    });
}


module.exports = {
    confirmCodeEmail
}