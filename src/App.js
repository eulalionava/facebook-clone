import React from 'react';
import { Feed } from './components/Feed';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { Widget } from './components/Widget';
import './styles/style.css';

export const App=()=>{

  const user = null;

  return(
    <div className="app">
      {
        !user?(<Login/>):(
          <>
          <Header/>
            <div className="app__body">
              <Sidebar/>
              <Feed/>
              <Widget/>
            </div>
          </>
        )
      }
    </div>
  )
}