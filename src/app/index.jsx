import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app.jsx';
import axios from 'axios';

const container = document.getElementById('root');
const root = createRoot(container);

axios.defaults.baseURL = 'https://6268f190f2c0cdabac06d6a5.mockapi.io/';
root.render(
  <div>
    <App />
  </div>
);
