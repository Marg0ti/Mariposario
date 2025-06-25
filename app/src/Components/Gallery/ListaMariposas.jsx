import { useEffect, useState } from 'react';
import axios from 'axios';

function ListaMariposas() {
  const [mariposas, setMariposas] = useState([]);
  const [seleccionada, setSeleccionada] = useState(null); // Mariposa activa

  useEffect(() => {
    axios.get('http://localhost:3000/mariposas')
      .then(res => setMariposas(res.data))
      .catch(err => console.error('Error al obtener mariposas:', err));
  }, []);

  const toggleDetalle = (index) => {
    setSeleccionada(seleccionada === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mt-5">
      {mariposas.map((mariposa, i) => (
        <div
          key={i}
          className="bg-galeriaBackground rounded-sm shadow hover:shadow-xl transform hover:scale-[1.02] transition duration-300 cursor-pointer overflow-hidden"
          onClick={() => toggleDetalle(i)}
        >
          <img
            src={`http://localhost:3000${mariposa.foto}`}
            alt={mariposa.nombre_comun}
            className="w-full h-65 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{mariposa.nombre_comun}</h2>

            {seleccionada === i && (
              <div className="mt-3 space-y-1 text-gray-600 text-sm">
                <p>
                  <strong>Nombre científico:</strong>{' '}
                  <em>{mariposa.nombre_cientifico}</em>
                </p>
                <p>
                  <strong>Distribución:</strong> {mariposa.distribucion}
                </p>
                <p>
                  <strong>Descripción:</strong> {mariposa.descripcion}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

  );
}

export default ListaMariposas;
