import CHARACTERS from '../api/static/characters'

export default ()=> ({
	type: 'CHANGE_ALL',
	characters: CHARACTERS.data.results
})
