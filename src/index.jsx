import { SpeedInsights } from "@vercel/speed-insights/react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/app";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeedInsights>
      <App />
    </SpeedInsights>
  </React.StrictMode>,
  document.getElementById('root')
);


