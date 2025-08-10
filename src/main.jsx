import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('Starting to render app');
const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

const root = ReactDOM.createRoot(rootElement);
console.log('Root created');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
