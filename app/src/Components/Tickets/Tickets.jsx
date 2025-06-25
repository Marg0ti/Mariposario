import React, { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51ROkF6RZ2EOvqa634jzPxqFT79B6leXtAvrLNzvMeoA1pM7rAIwxGS82JgkkhogiFy97mGiBcUmqXwFScGJex9vP00yQGFasto');

export default function Tickets() {
  const [formData, setFormData] = useState({
    date: "",
    hour: "",
    adultos: 1,
    ninos: 0,
    residente: false,
    nombre: "",
    email: ""
  });

  const [disponibilidad, setDisponibilidad] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [precioTotal, setPrecioTotal] = useState(0);
  const [maxEntradas, setMaxEntradas] = useState(null); // 👈 nuevo estado para el máximo permitido

  // Cargar disponibilidad cuando cambia la fecha
  useEffect(() => {
    if (formData.date) {
      fetch(`http://localhost:3000/api/disponibilidad?date=${formData.date}`)
        .then(res => res.json())
        .then(data => setDisponibilidad(data))
        .catch(err => console.error("Error al obtener disponibilidad:", err));
    }
  }, [formData.date]);

  // Actualizar el máximo permitido cuando cambia la hora seleccionada
  useEffect(() => {
    const seleccion = disponibilidad.find(h => h.hour === formData.hour);
    setMaxEntradas(seleccion?.disponibles ?? null);
  }, [formData.hour, disponibilidad]);

  // Calcular precio
  useEffect(() => {
    const { adultos, ninos, residente } = formData;
    const precio = residente
      ? adultos * 10 + ninos * 8
      : adultos * 12 + ninos * 10;
    setPrecioTotal(precio);
  }, [formData]);

  // Validación para no pasar el límite
  const validarCantidad = (tipo, valor) => {
    const total = tipo === "adultos"
      ? valor + formData.ninos
      : valor + formData.adultos;

    return maxEntradas === null || total <= maxEntradas;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : (type === "number" ? parseInt(value) : value);

    if ((name === "adultos" || name === "ninos") && !validarCantidad(name, parseInt(val))) {
      return setMensaje(`No puedes seleccionar más de ${maxEntradas} entradas en total para esa hora.`);
    }

    setMensaje("");
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    const totalEntradas = formData.adultos + formData.ninos;
    if (maxEntradas !== null && totalEntradas > maxEntradas) {
      return setMensaje(`Has superado el límite de ${maxEntradas} entradas disponibles para esa hora.`);
    }

    try {
      const res = await fetch('http://localhost:3000/api/pago', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reserva: formData })
      });

      const data = await res.json();

      if (!res.ok) {
        setMensaje(`Error: ${data.message}`);
        return;
      }

      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({ sessionId: data.id });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMensaje("Error al conectar con el servidor");
    }
  };

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split("T")[0];

  

  return (
    <div className="w-full p-6 bg-bgForm shadow-md rounded-sm space-y-6 mt-5">
  <h2 className="text-2xl font-bold mb-6 text-center text-h2">Reserva tu entrada</h2>
  <form onSubmit={handleSubmit} className="space-y-4">

    <div >
      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        min={today}
        onChange={handleChange}
        required
        className="w-full border border-bgInputs bg-bgInputs rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-inputFocus"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
      <select
        name="hour"
        value={formData.hour}
        onChange={handleChange}
        required
        className="w-full border border-bgInputs bg-bgInputs rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-inputFocus"
      >
        <option value="">-- Selecciona una hora --</option>
        {disponibilidad.map((hora) => (
          <option
            key={hora.hour}
            value={hora.hour}
            disabled={hora.disponibles === 0}
          >
            {hora.hour} ({hora.disponibles} disponibles)
          </option>
        ))}
      </select>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Adultos</label>
        <input
          type="number"
          name="adultos"
          value={formData.adultos}
          min="0"
          onChange={handleChange}
          className="w-full border border-bgInputs bg-bgInputs rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-inputFocus"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Niños</label>
        <input
          type="number"
          name="ninos"
          value={formData.ninos}
          min="0"
          onChange={handleChange}
          className="w-full border border-bgInputs bg-bgInputs rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-inputFocus"
        />
      </div>
    </div>

    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        name="residente"
        checked={formData.residente}
        onChange={handleChange}
        className="h-4 w-4 text-checkboxSelected focus:ring-inputFocus border-bgInputs bg-bgInputs rounded"
      />
      <label className="text-sm text-gray-700">¿Residente de la isla?</label>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        className="w-full border border-bgInputs bg-bgInputs rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-inputFocus"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Email de contacto</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-bgInputs bg-bgInputs rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-inputFocus"
      />
    </div>

    <p className="text-lg font-semibold text-gray-800 mt-4">
      Total a pagar: <span className="text-precioTickets">{precioTotal}€</span>
    </p>

    <button
      type="submit"
      className="w-full bg-buttonBackground text-buttonText border-1 border-solid border-buttonBorder py-2 px-4 rounded-sm hover:bg-buttonBackgroundHover hover:text-buttonTextHover hover:border-buttonBorderHover transition duration-300"
    >
      Proceder al pago
    </button>
  </form>

  {mensaje && (
    <p className="mt-4 text-center text-red-600 font-medium">{mensaje}</p>
  )}
</div>

    
  );
}
