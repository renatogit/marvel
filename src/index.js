import "./assets/styles/_all.scss"

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}<Home /></div>,
  document.getElementById('app')
);

module.hot.accept();

