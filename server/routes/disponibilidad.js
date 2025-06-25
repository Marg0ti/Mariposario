const express = require('express');
const router = express.Router();
const itemModel = require('../models/Item');

// Horarios disponibles
const HORAS = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

router.get('/', async (req, res) => {
  const { date } = req.query;
  if (!date) {
    return res.status(400).json({ message: 'Fecha requerida' });
  }

  try {
    const reservas = await itemModel.find({ date });

    const disponibilidad = HORAS.map(hora => {
      const reservadas = reservas
        .filter(r => r.hour === hora)
        .reduce((acc, r) => acc + r.adultos + r.ninos, 0);
      
      return {
        hour: hora,
        disponibles: Math.max(0, 50 - reservadas)
      };
    });

    res.json(disponibilidad);
  } catch (error) {
    console.error('Error al obtener disponibilidad:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
