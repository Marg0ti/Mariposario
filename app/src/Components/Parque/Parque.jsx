export default function Parque() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-16">
      
      {/* Mariposas */}
      <article className="grid md:grid-cols-2 gap-8 items-top mt-5">
        
        <img
          src="/images/parque-mariposa.jpg"
          alt="Mariposa"
          className="w-full  object-cover rounded-lg shadow"
        />
        <div className="space-y-4 text-text text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-h2">Mariposas</h2>
          <p>
            En el Mariposario vuelan unas 800 mariposas procedentes de las áreas tropicales de todo el mundo. Como su vida media es de tan solo 2-3 semanas, en el jardín siempre podrás encontrar especies nuevas. A lo largo del año se pueden ver más de 150 especies diferentes.
          </p>
          <p>
            Gracias a que muchas especies se reproducen en el propio parque, además de las mariposas es posible observar otras fases de su ciclo biológico como huevos y orugas, o comportamientos como los delicados bailes nupciales y los apareamientos. Todos los días tenemos nuevos nacimientos, no te pierdas la oportunidad única de ver como salen de la crisálida y despliegan sus alas, podrás ser testigo de su primer vuelo tras la metamorfosis.
          </p>
          <p>
            Aunque en el mariposario conviven en el mismo espacio especies de todo el mundo no existe conflicto ni competitividad entre ellas. Las condiciones en el interior del área de vuelo son las de sus hábitats de origen, un 80% de humedad relativa y 24-29ºC de temperatura.
          </p>
        </div>
      </article>

      {/* Plantas */}
      <article className="space-y-6">
        <h2 className="text-3xl font-bold text-h2">Plantas</h2>
        <div className="space-y-4 text-text text-lg leading-relaxed">
          <p>
            En el mariposario las plantas comparten protagonismo con las mariposas tanto por su belleza como por su importancia, ya que son la base para su vida. De ellas se alimentan y en ellas se reproducen. Cada especie de mariposa necesita una planta específica para poner los huevos que es la planta que come la oruga, se llama planta hospedante y esta relación entre plantas y mariposas es el resultado de millones de años de evolución.
          </p>
          <p>
            Las plantas que puedes ver en el mariposario se agrupan en tres categorías, muchas de ellas han sido traídas directamente de sus países de origen (Bali, Costa Rica, Tailandia, etc.)
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Plantas ornamentales:</strong> Especies tropicales seleccionadas por su singularidad y belleza.</li>
            <li><strong>Plantas de flor ricas en néctar:</strong> Son las que alimentan a nuestras mariposas.</li>
            <li><strong>Plantas hospedantes:</strong> Específicas para reproducción y alimento de orugas.</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <img src="/images/parque-planta.jpg" alt="Planta" className="rounded-lg shadow object-cover h-60 w-full" />
          <img src="/images/parque-planta2.jpg" alt="Planta" className="rounded-lg shadow object-cover h-60 w-full" />
        </div>
      </article>

      {/* Lucha biológica */}
      <article className="space-y-6">
        <h2 className="text-3xl font-bold text-h2">Lucha biológica, nuestros pequeños colaboradores</h2>
        <p className="text-text text-lg leading-relaxed">
          Las condiciones ambientales del Mariposario son ideales para nuestras mariposas, pero también lo son para otros habitantes indeseables en cualquier jardín: las plagas. Nosotros no podemos combatirlas utilizando insecticidas, ni siquiera los biológicos, pues afectarían a las mariposas, por eso lo hacemos mediante la lucha biológica que consiste en usar los enemigos naturales de las plagas para su control.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          La eficacia de la lucha biológica se basa en la especificidad entre plaga y controlador, éste solo sobrevive mientras su especie diana (plaga) esté presente. Las especies de nuestro pequeño ejército son las siguientes:
        </p>
        {/* Si tienes más contenido como una lista, puedes agregarla aquí */}
      </article>

    </section>
  );
}
