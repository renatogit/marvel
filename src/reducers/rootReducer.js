import {combineReducers} from 'redux'

import fieldReducer from './fieldReducer'
import charactersReduce from './charactersReduce';

const rootReducer =  combineReducers({
	field: fieldReducer,
	characters: charactersReduce,
})

export default rootReducer;
