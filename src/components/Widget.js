import React from 'react';
import '../styles/style.css';
import { Contacto } from './Contacto';


export const Widget = ()=>{
    return(
        <div className="widget">
            <Contacto 
                img="https://panamericanworld.com/wp-content/uploads/2018/07/eugenio-derbez.jpg"
                nombre="Eugenio Dervez"/>
            <Contacto
                img="https://fundaciongabo.org/sites/default/files/imagenportada/2018-02/Sylvester-Stallone-Falsa-Muerte.jpg"
                nombre="Juan Gonzales"/>
        </div>
    )
}