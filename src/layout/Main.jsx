import React from 'react'
import marvelApi from '../components/Api'

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
                { data.length === 0 ? 'Carregando ...' :  data.map ((n, i) => <li className="heroTitle" key={i}>  {n.images.path}{ n.title} </li>	)}
                </ul>
                </nav>
              </section>
                
            </main>
        )
    }
}


export default Main;