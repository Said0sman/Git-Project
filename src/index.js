import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import {robots} from './global/robots';


ReactDOM.render(
  <React.StrictMode>
    <App robots={robots} />
  </React.StrictMode>,
  document.getElementById('root')
);



