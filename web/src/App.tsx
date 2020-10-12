import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

const src: React.FC = () => (
  <BrowserRouter>
    <Routes />

    <GlobalStyle />
  </BrowserRouter>
);

export default src;
