import React from 'react'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
// import { Redirect, Router, Route } from 'react-router-dom'
// import createHashHistory from 'history/createHashHistory'

// const hashHistory = createHashHistory();

const Home = () => (
   <div>
       <Header />
       <Main />
			 
			 	{/* <Router history={hashHistory}>
					 <div>
						 	<Route path="/" exact component={Index} />
      				<Route path="/about/" component={About} />
      				<Route path="/users/" component={Users} />
					 </div>
				</Router> */}
			 
			 <Footer />
   </div>
)
    


export default Home;
