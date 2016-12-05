import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

speechSynthesis.onvoiceschanged = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

