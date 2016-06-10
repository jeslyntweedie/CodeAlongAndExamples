var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//import{Router, Route, hashHistory, IndexRoute} fro 'react-router';

var Main = require('./../main.js');
var Home = require('./../home.js');
var Animals = require('./../animals.js');
var About = require('./../about.js');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path = '/' component={Main}>
		<IndexRoute component={Home}/>
		<Route path = '/animals' component={Animals}/>
		<Route path = '/about' component={About}/>
		</Route>
	</Router>, 
	document.getElementById('app')
	);
