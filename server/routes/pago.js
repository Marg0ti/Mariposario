const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); 

router.post('/', async (req, res) => {
  const { reserva } = req.body;

  const { nombre, email, adultos, ninos, residente } = reserva;

  const precio = residente
    ? adultos * 1000 + ninos * 800  // Stripe usa céntimos
    : adultos * 1200 + ninos * 1000;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Entrada al mariposario',
              description: `Reserva para ${adultos} adultos y ${ninos} niños`
            },
            unit_amount: precio,
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/reserva-exitosa',
      cancel_url: 'http://localhost:3000/reserva-cancelada',
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear la sesión de pago' });
  }
});

module.exports = router;
