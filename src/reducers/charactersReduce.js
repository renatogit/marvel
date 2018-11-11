const INITIAL_STATE = {value: 'characters'}

export default function (state = INITIAL_STATE, action) {
	switch(action.type){
		case 'CHANGE_ALL':
			return {value: action.characters}
		default:
			return state
	}
}
