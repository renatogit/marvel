import React from 'react'
import marvelApi from '../components/Api'

class Footer extends React.Component{
    
	state = {
		data: [],
	}
	componentDidMount(){
		marvelApi('comics', res => {
			this.setState({ data: res.body })
		})
	}
	render(){
		const {data} = this.state;
		console.log(data);
		
		return(
			<footer>
				<span>{data.copyright}</span>
				{data.attributionText}
				{data.attributionHTML}
			</footer>
		)
	}
}


export default Footer;
