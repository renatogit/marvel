import React from 'react'
import marvelApi from '../components/Api'
import MarvelImg from	'../assets/image/dbb2129035f83c491af200bb58e257cc.jpg'

class Main extends React.Component{
    
    state = {
        data: []
    }

    componentDidMount(){
            marvelApi('comics', res => {
                this.setState({ data: res.body.data.results
            })
        }
        )
    }

    render(){
        const {data} = this.state;

        return (
            <main className="main"> 
                {console.log('data:', data)}
              <section>
							
                <nav>
                    <ul>
												{/* { data.length === 0 ? 'Carregando ...' :  data.map ((n, i) => <li className="heroTitle" key={i}>  { n.title} </li>	)} */}
												{ data.length === 0 ? 'Carregando ...' : data.map( (n, i)=> 
																																						(n.images.length > 0 ?  	<img className="img" src={n.images[0].path +'.'+n.images[0].extension} />
																																							:<img className="img" src={MarvelImg} />
																																																
																																						)
																																				)				
												}

												{/* {console.log(data.map((n, i) => (n.images.length > 0 ? n.images : n.images.concat({path:'vazio'}) ) ))} */}
												{/* {console.log(data.map((n, i) => (n.images)	))						} */}
                    </ul>
                </nav>
              </section>
                
            </main>
        )
    }
}


export default Main;