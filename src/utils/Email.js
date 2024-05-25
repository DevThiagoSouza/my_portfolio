import nodemailer from 'nodemailer';

async function sendEmail(name, email, phone, message) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seu-email@gmail.com',
      pass: 'sua-senha'
    }
  });

  let mailOptions = {
    from: 'seu-email@gmail.com',
    to: 'destinatario@gmail.com',
    subject: 'Novo contato',
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
}
