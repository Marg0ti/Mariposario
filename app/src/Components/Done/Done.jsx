export default function Done() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-16 mt-5">
      
      <article className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-h2 mb-4">¿Cómo se trabaja?</h2>
          <p className="text-text leading-relaxed">
            Las mariposas que vuelan en nuestro jardín viajan hasta aquí en forma de pupa o crisálida, ya que esta es la fase
            de su ciclo biológico más fácil de transportar. Vienen de lugares tan lejanos como Filipinas, Malasia, Costa Rica,
            Belice o Kenia, donde son criadas en cautividad, no capturadas del medio natural.
            <br /><br />
            Una vez en el laboratorio y tras ser inspeccionadas, se colocan en las jaulas de eclosión donde, en condiciones
            ambientales controladas, nacen las mariposas a la vista de nuestros visitantes. Una vez en el jardín, son
            alimentadas con néctar artificial que se prepara diariamente en el laboratorio.
          </p>
        </div>
        <img
          src="/images/done-capullo.jpg"
          alt="Crisálida"
          className="rounded-lg shadow-md w-full object-cover h-80"
        />
      </article>


      <article className="space-y-4 ">
        <h2 className="text-2xl font-bold text-h2">C E N</h2>
        <p className="text-text leading-relaxed">
          El Centro Entomológico del Norte es nuestra granja de mariposas situada en una finca de 13.000 m² en el norte de
          Tenerife, donde el clima templado nos permite criar mariposas durante todo el año. Aquí se cultivan plantas
          nutricias en condiciones ecológicas para alimentar a las orugas.
          <br /><br />
          El CEN produce unas 35.000 pupas al año. El 75% de las mariposas que vuelan en nuestros mariposarios proceden de
          aquí; el 25% restante son importadas de otros países. También suministramos crisálidas a:

        </p>
        <ul className="list-disc list-inside mt-2 ml-4 text-text">
            <li>Mariposario del Parque de las Ciencias de Granada</li>
            <li>Faunia (Madrid)</li>
            <li>London Pupae Supplies (UK)</li>
        </ul>
      </article>


      <article >
        
        <div className="grid md:grid-cols-2 gap-8 items-top">
          <img
            src="/images/done-conservacion.jpg"
            alt="Conservación"
            className="rounded-lg shadow-md w-150 object-cover  scale-100"
          />
          <div>
              <h2 className="text-2xl font-bold text-h2">Conservación</h2>
              <p className="text-text leading-relaxed">
              Las mariposas son criadas en sus países de origen por comunidades locales, muchas veces campesinos con pocos recursos.
              Mediante el cultivo de plantas autóctonas, se contribuye a la conservación y reforestación de hábitats sin valor
              comercial. Esta actividad mejora la calidad de vida, fomenta la educación ambiental y promueve la conservación de
              especies locales.
              </p>

              <p className="text-text leading-relaxed">
              Organizaciones como el Fondo Mundial para la Vida Salvaje han incorporado estos proyectos en sus programas de
              conservación para países con alta biodiversidad y deforestación. Este modelo ofrece un ejemplo valioso para el uso
              sostenible de ecosistemas frágiles.
              </p>


          </div>
        </div>
        <div className="border border-doneFourmlaBorder justify-center items-center mt-14">
              <p className="text-doneFormula font-semibold text-lg text-center p-3">
              Beneficio económico = Desarrollo = Educación = Conservación
              </p>
        </div>
        
        
        
      </article>
    </section>
  );
}
