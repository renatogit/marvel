const INITIAL_STATE = {value:'default'};

export default function (state = INITIAL_STATE, action = {}) {
	switch(action.type){
		case 'CHANGE_TEST':
			return {value: action.payload = 'case' }
		default:
			return state
	}
		
}
