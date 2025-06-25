
export default function Footer() {
  return (
  
      <footer className="bg-footerBackground text-footerText py-8 mt-10 border-t border-t-footerBorder">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/" className="hover:text-footerTextHover text-base transition">Inicio</a>
            <a href="/contacto" className="hover:text-footerTextHover text-base transition">Contacto</a>
            <a href="/privacidad" className="hover:text-footerTextHover text-base transition">Política de privacidad</a>
            <a href="/aviso-legal" className="hover:text-footerTextHover text-base transition">Aviso legal</a>
          </nav>
          <p className="text-xs text-footerText">&copy; {new Date().getFullYear()} Mariposario de Tenerife. Todos los derechos reservados.</p>
        </div>
      </footer>

  );
}
