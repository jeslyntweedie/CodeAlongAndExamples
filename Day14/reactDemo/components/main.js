var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container jumbotron allthings">
					<h1 className="theTitle">Hello from Jeslyn's Wildlife Refuge Safari!</h1>
					<p> Providing new enviornments for animals who have had their habitats taken away from human devleopment.</p>
					
					
					<Link to='/'>
						<button className="btn btn-info">Home</button>
					</Link>
					<Link to='/about'>
						<button className="btn btn-info">About</button>
					</Link>
					<Link to="/animals">
						<button className="btn btn-info">Animals</button>
					</Link>	
					{this.props.children}

				</div>	
			</div>
			)
	}
});

module.exports = Main;