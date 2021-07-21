import React from 'react';
import '../styles/style.css';

export const SidebarRow =({ src,Icon,title })=>{
    return(
        <div className="sidebarRow">
            <h2>{ title }</h2>
        </div>
    )
}