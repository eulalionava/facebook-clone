import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './styles/style.css';

export const App=()=>{
  return(
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
      </div>
    </div>
  )
}