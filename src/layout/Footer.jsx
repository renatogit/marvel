import React from 'react'
import Generics from '../api/generics'

class Footer extends React.Component{
    
	state = {
		data: [],
	}
	componentDidMount(){
		Generics.getComics(res => {
			this.setState({ data: res.body })
		})
	}
	render(){
		const {data} = this.state;
				
		return(
			<footer className="footer">
				<span>{data.copyright}</span>
				{data.attributionText}
			</footer>
		)
	}
}


export default Footer;
