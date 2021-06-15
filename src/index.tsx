import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Theme, ThemeProvider} from '@emotion/react'

const theme: Theme = {
    minWidth: '1024',
    maxWidth: '1024',
};

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
