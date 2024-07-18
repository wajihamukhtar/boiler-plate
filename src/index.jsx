import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import theme from './theme.js';
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);