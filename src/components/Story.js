import { Avatar } from '@material-ui/core';
import React from 'react';
import '../styles/style.css';

export const Story = ({ image,profileSrc,title })=>{
    return(
        <div style={{ backgroundImage:`url(${ image })`}} className="story">
            <Avatar className="story__avatar" src={ profileSrc }/>
            <h4>{ title }</h4>
        </div>
    )
}