import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../Headers/Header.jsx'
// import Burger from '../Burger-menu/Burger.jsx'
// import Navbar from '../Normal-menu/Navbar.jsx'
import Footer from '../Footer/Footer.jsx';


export default function Layoutlet() {
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // useEffect(() => {
  //   const mobileSize = () => setIsMobile(window.innerWidth < 600);
  //   window.addEventListener("resize", mobileSize);
  //   return () => {
  //     window.removeEventListener("resize", mobileSize);
  //   };
  // }, []);

    return (
        <>
            <Header />
            {/* {isMobile ? (
                <Burger />
            ) : (
                <Navbar />
            )} */}
                
            <main className="pt-20 flex-grow min-h-screen" >
                <Outlet />
            </main>
            <Footer />
            
        </>
    )
}