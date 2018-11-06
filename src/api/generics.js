import Api from './Api'


class Generics extends Api{

	static getCharacters(callback){
		return this.getMarvel('characters', callback)
	}

	static getComics(callback){
		return this.getMarvel('comics', callback)
	}

	static getCreators(callback){
		return this.getMarvel('creators', callback)
	}

	static getEvents(callback){
		return this.getMarvel('events', callback)
	}

	static getSeries(callback){
		return this.getMarvel('series', callback)
	}

	static getStories(){
		return this.getMarvel('stories', res => res)
	}
}


export default Generics;
