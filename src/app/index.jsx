import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app.jsx';
import IndexContextProvider from './context/contextAPI.js';
import Errorboundry from './ErrorBoundry/errorboundry.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Errorboundry>
    <IndexContextProvider>
      <div>
        <App />
      </div>
    </IndexContextProvider>
  </Errorboundry>
);
