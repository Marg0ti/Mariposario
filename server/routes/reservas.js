const express = require('express');
const router = express.Router();
const itemModel = require('../models/Item');

// Función para calcular el precio
function calcularPrecio(adultos, ninos, residente) {
  const precios = residente
    ? { adulto: 7, nino: 4 }
    : { adulto: 10, nino: 6 };

  return (adultos * precios.adulto) + (ninos * precios.nino);
}

router.post('/', async (req, res) => {
  const { date, hour, adultos, ninos, nombre, email, residente } = req.body;

  if (!date || !hour || adultos == null || ninos == null || !nombre || !email) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  try {
    // Ver cuántas plazas ya están reservadas
    const reservas = await itemModel.find({ date, hour });
    const totalReservadas = reservas.reduce((acc, r) => acc + r.adultos + r.ninos, 0);
    const totalSolicitadas = adultos + ninos;

    if (totalReservadas + totalSolicitadas > 50) {
      return res.status(400).json({ message: 'No hay suficientes plazas disponibles' });
    }

    // Calcular el precio
    const total = calcularPrecio(adultos, ninos, residente);

    // Crear y guardar la reserva
    const nuevaReserva = new itemModel({
      date,
      hour,
      adultos,
      ninos,
      nombre,
      email,
      residente,
      precio: total
    });

    await nuevaReserva.save();
    res.status(201).json({ message: 'Reserva creada', reserva: nuevaReserva });

  } catch (error) {
    console.error('Error al crear reserva:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
