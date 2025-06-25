const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_...'); // tu clave secreta
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { generarPDF } = require('./pdf'); // función que tú vas a crear

router.post('/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = 'whsec_...'; // ⚠️ Este te lo da Stripe al configurar el webhook

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_email;
    const metadata = session.metadata;

    // buscar la reserva usando metadata o session.id
    const pdfBuffer = await generarPDF({ email, metadata }); // PDF generado

    // ENVÍA EL CORREO
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Usa una app password
      },
    });

    await transporter.sendMail({
      from: `Mariposario" ${process.env.EMAIL_USER}`,
      to: email,
      subject: '¡Gracias por tu compra!',
      text: 'Adjuntamos tus entradas.',
      attachments: [
        {
          filename: 'entradas.pdf',
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    });

    console.log("Correo enviado con entradas a", email);
  }

  res.sendStatus(200);
});

module.exports = router;
