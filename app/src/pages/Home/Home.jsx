import React from 'react'
import SubHeader from '../../Components/Headers/SubHeader.jsx'
import Carrousel from '../../Components/Home/Carrousel.jsx';
import HomeComponent from '../../Components/Home/Home.jsx'

export default function Home() {
    return (
        <div>
            <Carrousel></Carrousel>
            <HomeComponent />
        </div>
    );
}
