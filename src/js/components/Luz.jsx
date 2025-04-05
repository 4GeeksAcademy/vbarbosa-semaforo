import React, { useState } from "react";

export const Luz = () => { 
    
    const [red, setRed] = useState(false);
    const [orange, setOrange] = useState(false);
    const [green, setGreen] = useState(false);

    const lightRed = () => {
        setRed(!red);
        setGreen(false);
        setOrange(false);
    }

    const lightOrange = () =>{
        setOrange(!orange);
        setRed(false);
        setGreen(false);
    }

    const lightGreen = () =>{
        setGreen(!green);
        setOrange(false);
        setRed(false);
    }

    return (
        <div className="btn-group-vertical">
            <button onClick={lightRed} className={`luzRoja ${red ? 'on' : ''}`}></button>,

            <button onClick={lightOrange} className={`luzNaranja ${orange ? 'on' : ''}`}></button>,

            <button onClick={lightGreen} className={`luzVerde ${green ? 'on' : ''}`}></button>
        </div>
        

    );

};