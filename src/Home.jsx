import React from 'react'
import Header from './layout/Header'
import Main from './layout/Main'
import Test from './Test'
import Footer from './layout/Footer'
import { Router, Route } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'

const hashHistory = createHashHistory();

const Home = () => (
   <div>
       <Header />
			 	<Router history={hashHistory}>
					 <div>
						 	<Route path="/" exact component={Main} />
      				<Route path="/test" component={Test} />
					 </div>
				</Router>
			 <Footer />
   </div>
)
    
export default Home;
