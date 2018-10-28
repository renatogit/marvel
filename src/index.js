import "./assets/styles/_all.scss"

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'


ReactDOM.render(
  <Home />,
  document.getElementById('app')
);

module.hot.accept();

