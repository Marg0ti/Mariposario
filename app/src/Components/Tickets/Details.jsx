export default function Details() {
  return (
    <div className="w-full p-6 bg-bgForm shadow-md rounded-sm space-y-6 mt-5">
      <h2 className="text-2xl font-bold text-center text-h2">Información y precios</h2>

      <article>
        <table className="w-full b text-left text-sm">
          <caption className="text-lg font-semibold text-inputFocus mb-2 text-left px-2 py-1">
            Tarifas
          </caption>
          <thead className="bg-gray-100 text-gray-700 divide-y divide-inputFocus">
            <tr>
              <th className="p-2 font-medium">Tipo</th>
              <th className="p-2 font-medium">Precio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-inputFocus">
            <tr>
              <td className="p-2">Entrada general</td>
              <td className="p-2">12€</td>
            </tr>
            <tr>
              <td className="p-2">Entrada residente</td>
              <td className="p-2">10€</td>
            </tr>
            <tr>
              <td className="p-2">Entrada niño</td>
              <td className="p-2">10€</td>
            </tr>
            <tr>
              <td className="p-2">Entrada niño residente</td>
              <td className="p-2">8€</td>
            </tr>
          </tbody>
        </table>
      </article>

      <article className="text-sm text-text inputFocus space-y-2">
        <p><strong className=" text-inputFocus ">Horario:</strong> De lunes a domingo de 10:00 a 19:30 horas.</p>
        <p><strong className=" text-inputFocus ">Información adicional:</strong> Están permitidas las fotografías, incluido el uso del flash. Accesible a personas con movilidad reducida.</p>
      </article>
    </div>
  );
}
