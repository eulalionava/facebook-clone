
import React from 'react';
import '../styles/style.css';
import { SidebarRow } from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

export const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <SidebarRow src='https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-icono-de-usuario-hombre-perfil-hombre-de-negocios-avatar-icono-persona-en-la-ilustraci%C3%B3n-vectorial.jpg?ver=6' title="Eulalio nava"/>
            <SidebarRow Icon={ LocalHospitalIcon } title="Covid 19 informacion"/>
            <SidebarRow Icon={ EmojiFlagsIcon } title="Pages"/>
            <SidebarRow Icon={ PeopleIcon } title="Friends"/>
            <SidebarRow Icon={ ChatIcon } title="Messeger"/>
            <SidebarRow Icon={ PeopleIcon } title="Friends"/>
            <SidebarRow Icon={ StorefrontIcon } title="Marketplace"/>
            <SidebarRow Icon={ VideoLibraryIcon } title="Videos"/>
            <SidebarRow Icon={ ExpandMoreOutlined } title="Friends"/>
        </div>
    )
}