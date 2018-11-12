import React from 'react'
import Generics from '../api/generics'

class Main extends React.Component {
    
    state = { comics: []}

    componentDidMount() {	
			 Generics.getComics(
			 	res=> {
			 		this.setState({ comics: res.body.data.results})
			 	})
		}
		
    render(){
				const {comics} = this.state;
        return (
          <main className="main"> 
            <section>
							{comics.length === 0 ? <h2 className="loading">Loading ...</h2> : null }															
              <nav>
                <ul className="hero">
									{ comics.map( (n, i)=> 
										<li key={i} className="hero__content">  
											<h2 className="hero__title">	{ n.title} </h2>
												{(n.images.length > 0 ? n.images.map((n, i) => <img key={i} className="hero__img" src={ n.path + '.'+ n.extension} />)
																							: <img className="hero__img" src="assets/images/marvel.jpg" />
												)}
										</li>	)
									}
                </ul>
							</nav>
						</section>  
          </main>
        )
    }
}

export default Main;



