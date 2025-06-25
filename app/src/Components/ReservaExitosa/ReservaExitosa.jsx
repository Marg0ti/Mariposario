import { useEffect, useState } from 'react';

export default function ReservaExitosa() {
  const [mensaje, setMensaje] = useState("Procesando reserva...");

  useEffect(() => {
    const reserva = JSON.parse(localStorage.getItem("reserva"));

    if (!reserva) {
      setMensaje("No se encontró información de la reserva.");
      return;
    }

    fetch("http://localhost:3000/api/reserva", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reserva),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.reserva) {
          setMensaje("¡Reserva registrada con éxito!");
          localStorage.removeItem("reserva");
        } else {
          setMensaje(`Error: ${data.message}`);
        }
      })
      .catch((err) => {
        console.error(err);
        setMensaje("Ocurrió un error al guardar la reserva.");
      });
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{mensaje}</h2>
    </div>
  );
}
