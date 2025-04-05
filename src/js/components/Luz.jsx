import React, { useState } from "react";

export const Luz = () => { 
    
    // This sets default state for all buttons
    const [red, setRed] = useState(false);
    const [orange, setOrange] = useState(false);
    const [green, setGreen] = useState(false);

    // Here we set all functions to change className from default to .on after we click
    // This will also unable the other buttons back to default
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

    // We return all buttons inside the same div with btn-group-vertical class in order to be seen vertically
    return (
        <div className="btn-group-vertical">
            <button onClick={lightRed} className={`luzRoja ${red ? 'on' : ''}`}></button>,

            <button onClick={lightOrange} className={`luzNaranja ${orange ? 'on' : ''}`}></button>,

            <button onClick={lightGreen} className={`luzVerde ${green ? 'on' : ''}`}></button>
        </div>
        

    );

};