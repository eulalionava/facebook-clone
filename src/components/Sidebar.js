import React from 'react';
import '../styles/style.css';
import { SidebarRow } from './SidebarRow';

export const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <SidebarRow title="Pages"/>
            <SidebarRow title="Friends"/>
        </div>
    )
}