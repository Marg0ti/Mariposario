import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import Burger from '../Burger-menu/Burger.jsx'
import Navbar from '../Normal-menu/Navbar.jsx'

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    
    
      useEffect(() => {
        const mobileSize = () => setIsMobile(window.innerWidth < 600);
        window.addEventListener("resize", mobileSize);
        return () => {
          window.removeEventListener("resize", mobileSize);
        };
        }, []);
    return(
        <>
        <header className="flex items-center justify-center h-auto bg-headerBackground flex-col gap-2 ">
            <div className='flex items-center justify-center'>
                <img src="/logo.png" alt="" className="" />
            </div>
            <div>
                {isMobile ? (<Burger />) : (<Navbar />)}
            </div>

        </header>
            
        
        </>
    );
}