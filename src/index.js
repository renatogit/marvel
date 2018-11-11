import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'
import './assets/styles/_all.scss'
import Home from './Home'


const store = createStore(
	rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
		<Home />
	</Provider>,
  document.getElementById('app')
);

module.hot.accept();

