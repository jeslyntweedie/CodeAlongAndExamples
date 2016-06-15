//AnimalApp (grandpappy)
  //EditAnimalData
           //animalEditForm
  //AllAnimalData 
  		   //AllAnimals
  				  //animalCard
  //AnimalPostData
  		  //animalPostForm 
  //Toggler
var React = require('react');
var AnimalEditForm = require('./animalEditForm.js');

var EditAnimalData = React.createClass({
	getInitialState: function() {
		return {
			name: null,
			color: null,
			age: null,
			species: null
		}
	},

	loadOneAnimalFromServer: function(){
		var self = this; 
		$.ajax({
			url: '/animals/' + self.props.id,
			method: 'GET'
		}).done(function(data){
			self.setState({
				name: data.name, 
				species: data.species, 
				habitat: data.habitat, 
				diet: data.diet
			})
		})
	},

	updateAnimal: function(animal){
		$.ajax({
			url: '/animals/' + this.props.id, 
			method: 'PUT', 
			dataType: 'json', 
			data: animal,
			success: function(data){
				this.props.toggleActiveComponent('allAnimals');
				this.loadOneAnimalFromServer();
			}.bind(this),  
			error: function(xhr, status, err) {
				console.error('/animals/'+ this.props.id, status, err.toString());
			}.bind(this)
		})
	},

	handleEditAnimalSubmit: function(event){
		event.preventDefault();

		var name = this.state.name;
		var species = this.state.species;
		var habitat = this.state.habitat;
		var diet = this.state.diet;

		this.updateAnimal({ name: name, species: species, habitat: habitat, diet: diet });
	},

	onNameChange: function(event){
		this.setState({name: event.target.value});
	},

	onSpeciesChange: function(event){
		this.setState({species: event.target.value});
	},

	onHabitatChange: function(event){
		this.setState({habitat: event.target.value});
	},

	onDietChange: function(event){
		this.setState({diet: event.target.value});
	},

	componentDidMount: function() {
		this.loadOneAnimalFromServer();
	},

	render: function() {
		return (
			<div>
			<AnimalEditForm 
			name={this.state.name}
			species={this.state.species}
			habitat={this.state.habitat}
			diet={this.state.diet}
			handleEditAnimalSubmit={this.handleEditAnimalSubmit} 
			onNameChange ={this.onNameChange}
			onSpeciesChange={this.onSpeciesChange}
			onHabitatChange={this.onHabitatChange}
			onDietChange={this.onDietChange} />

			</div>
			)
	}
});

module.exports= EditAnimalData; 