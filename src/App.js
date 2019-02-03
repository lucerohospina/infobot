import React, { Component } from 'react';
import Home from './components/Home';
import Form from './components/Form';
import './App.css';
import {
	BrowserRouter,
	Route,
  Switch
} from 'react-router-dom';

const App = (props) => {
	return (<BrowserRouter>
		<div className="App">
			<Switch>
			<Route  path="/Home" render={() => <Home/>}/>

			<Route  path="/Form" render={() => <Form/>}/>
				<Route component={Home}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;
