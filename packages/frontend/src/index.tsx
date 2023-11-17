import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AppContainer from './modules/app';

Modal.setAppElement(document.getElementById('root')!);

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
