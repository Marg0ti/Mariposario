import { Link } from 'react-router-dom'

export default function Layoutlet() {
    return (
        <>
            
            <nav className=" top-0 w-full  text-navText py-4 px-8 z-50 border-b border-b-navBorder ">
                <ul className="flex justify-center gap-8 text-lg font-medium ">
                    <li><Link to="/" className="hover:text-navHover transition-colors">Inicio</Link></li>
                    <li><Link to="/el-parque" className="hover:text-navHover transition-colors">El parque</Link></li>
                    <li><Link to="/que-hacemos" className="hover:text-navHover transition-colors">Qué hacemos</Link></li>
                    <li><Link to="/galeria" className="hover:text-navHover transition-colors">Galería</Link></li>
                    <li><Link to="/entradas" className="hover:text-navHover transition-colors">Entradas</Link></li>
                    <li><Link to="/contacto" className="hover:text-navHover transition-colors">Contacto</Link></li>
                </ul>
            </nav>
            
        </>
    )
}