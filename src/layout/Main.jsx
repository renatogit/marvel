import React from 'react'
import marvelApi from '../components/Api'
import MarvelImg from	'../assets/image/dbb2129035f83c491af200bb58e257cc.jpg'

class Main extends React.Component{
    
    state = {
			data: [],
			characters: [],
			series: []
    }

    componentDidMount(){
      marvelApi('comics', res => {
        this.setState({ data: res.body.data.results })
      })
		}
		// componentDidMount(){
    //   marvelApi('characters', res => {
    //     this.setState({ characters: res.body })
    //   })
		// }

		// componentDidMount(){
    //   marvelApi('series', res => {
    //     this.setState({ series: res.body.data.results })
    //   })
    // }

    render(){
        const {data,characters, series} = this.state;

        return (
          <main className="main"> 
            {/* {console.log('series:', series)} */}
            <section>
							{series.length === 0 ? <h2 className="loading">Carregando ...</h2> : null }															
              <nav>
                <ul className="hero">
									{ data.map( (n, i)=> 
										<li key={i} className="hero__content">  
											<h2  className="hero__title">	{ n.title} </h2>
												{(n.images.length > 0 ? n.images.map(n => <img className="hero__img" src={ n.path + '.'+ n.extension} />)
																							: <img className="hero__img" src={MarvelImg} />
												)}
										</li>	)
									}
                </ul>
							</nav>
							{/* AS CHAMADAS NÂO PODEM SER FEITAS JUNTAS */}
							<nav>
                <ul className="hero">
										{ series.map( (n, i) => 
												<li key={i} className="hero__content">  
														<img className="hero__img" src={ n.thumbnail.path + '.'+ n.thumbnail.extension} />
												</li>	
											)
										}
                </ul>
              </nav>
            </section>
                
          </main>
        )
    }
}

export default Main;
