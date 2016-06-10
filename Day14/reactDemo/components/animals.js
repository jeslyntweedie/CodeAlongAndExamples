//Animals
	//animalData
	//animalPostData
		//animalPostForm



var React = require('react');
var AnimalData = require('./animalData.js');
var AnimalPostData = require('./animalPostData.js');

var Animals =React.createClass({
	getInitialState: function(){
		return {
			animals: []
		}
	},

	getAllAnimalsFromServer: function(){
		var self = this;

		$.ajax({
			method: 'GET',
			url: '/animals'
		}).done(function(data) {
			console.log(data);
			self.setState({ animals: data}) //referencing function within obect
		})
	},
	componentDidMount: function(){     ///invoking function to call back
		this.getAllAnimalsFromServer();
	},	

	render : function() {
		var creatures = this.state.animals.map(function(item){ 
			return <AnimalData name={ item.name} //storing that within a new value, just name
								species={ item.species}
								habitat={ item.habitat}
								diet={ item.diet}
								key={ item._id} //mongo = _id assigned to key property
								/>
		});

		return <div>

		      { creatures } 
		      <AnimalPostData getAllAnimalsFromServer={this.getAllAnimalsFromServer} /> 
		</div>
	}
});

module.exports = Animals; 