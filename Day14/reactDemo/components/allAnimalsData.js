//AnimalApp (grandpappy)
  //AllAnimalData 
  		   //AllAnimals
  				  //animalCard
  //AnimalPostData
  		  //animalPostForm 
  //Toggler

var React = require('react');
var AllAnimals = require('./allAnimals.js')

var AllAnimalsData =React.createClass({
	getInitialState: function(){
		return {
			animals: []
		}
	},

	deleteAnimalFromServer: function(id){
			var self = this; 
		$.ajax({
			method: 'DELETE',
			url: '/animals/' + id

		}).done(function(){
			self.getAllAnimalsFromServer();
		})
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
			
			return this.state.animals ? <AllAnimals getId= {this.props.getId} deleteAnimalFromServer={this.deleteAnimalFromServer} animals={ this.state.animals } /> : null;
	}
});

module.exports = AllAnimalsData; 