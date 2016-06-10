var React = require('react');


var AnimalData = React.createClass( {
	render: function() {
		return( <div>
			<div className= "container">
         		<h1> Animal's name: {this.props.name } </h1> 
         		<h2> Animal's species: {this.props.species } </h2>
         		<h3> Animal's habitat: {this.props.habitat} </h3>
         		<h3> Animal's diet: {this.props.diet} </h3>
		   </div></div> //passing down from state to props
		)
	}
});

module.exports = AnimalData;