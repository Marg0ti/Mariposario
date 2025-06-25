const itemModel = require('../models/Item');

const crearReserva = async (req, res) => {
  const { date, hour, adultos, ninos, residente, nombre, email } = req.body;

  try {
    const totalVendidas = await itemModel.aggregate([
      { $match: { date, hour } },
      {
        $group: {
          _id: null,
          total: {
            $sum: {
              $add: ['$adultos', '$ninos']
            }
          }
        }
      }
    ]);

    const vendidas = totalVendidas[0]?.total || 0;
    const disponibles = 50 - vendidas;
    const solicitadas = adultos + ninos;

    if (solicitadas > disponibles) {
      return res.status(400).json({ message: 'No hay suficientes entradas disponibles' });
    }

    let precio = adultos * 12 + ninos * 10;
    if (residente) {
      precio -= (adultos + ninos) * 2;
    }

    const reserva = new itemModel({
      date,
      hour,
      adultos,
      ninos,
      residente,
      nombre,
      email,
      precio
    });

    await reserva.save();
    res.status(201).json({ message: 'Reserva exitosa', reserva });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = { crearReserva };
