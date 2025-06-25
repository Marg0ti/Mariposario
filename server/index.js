require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./dbConnection.js');
const disponibilidadRouter = require('./routes/disponibilidad.js');
const reservasRouter = require('./routes/reservas.js');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
connectToDatabase();

// Rutas API
// app.use('/api/reservas', reservasRouter);
app.use('/api/reservas', require('./routes/reservas.js'));

app.use('/api/disponibilidad', disponibilidadRouter);

app.use('/api/pago', require('./routes/pago.js'));


// Ruta de contacto
app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Formulario: ${subject}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor backend corriendo en http://localhost:3000');
});


// conexion a mariposas
app.use('/mariposas', require('./routes/mariposas.js'));
app.use('/uploads', express.static('uploads'));

