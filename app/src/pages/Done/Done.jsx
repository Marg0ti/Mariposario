import React from 'react';
import SubHeader from '../../Components/Headers/SubHeader.jsx';
import DoneComponente from '../../Components/Done/Done.jsx';

export default function Done() {
    return (
        <>
        <SubHeader title="Qué hacemos" imageUrl={"/images/subHeader-done.jpg"}></SubHeader>
            <DoneComponente />
        </>
    )
}