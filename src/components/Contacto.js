import { Avatar } from '@material-ui/core';
import React from 'react';

export const Contacto =({img,nombre})=>{
    return(
        <div className="contacto">
            <Avatar src={ img }/>
            <h4>{ nombre }</h4>
        </div>
    )
}