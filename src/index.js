import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { initialState, reducer } from './auth/reducer';
import { StateProvider } from './auth/StateProvider';

ReactDOM.render(
  <StateProvider initialState={ initialState } reducer={ reducer }>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
