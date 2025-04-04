import React, { useState } from "react";

export const Semaforo = () => { 
    
    const [red, setRed] = useState("luzRoja m-2 mx-auto");
    const [orange, setOrange] = useState("luzNaranja m-2 mx-auto");
    const [green, setGreen] = useState("luzVerde m-2 mx-auto");

    return (
        <button className={red} onClick={() => setRed("glow")}></button>,
    );
};