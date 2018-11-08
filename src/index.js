import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore } from 'redux'
import {Provider} from 'react-redux'
import './assets/styles/_all.scss'
import Home from './Home'

const reducers = combineReducers({
	field: ()=>({value: 'Opa'})
})

const store = createStore(
	reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
		<Home />
	</Provider>,
  document.getElementById('app')
);

module.hot.accept();

