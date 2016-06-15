//AnimalApp (grandpappy)
  //AllAnimalData 
  		   //AllAnimals
  				  //animalCard
  //AnimalPostData
  		  //animalPostForm 
  //Toggler

var React = require('react'); 

var AnimalCard = React.createClass({ 
		render:function (){
			return (
			<div>		
				<div className="well col-xs-4">
				<h3>Animal's Name: { this.props.name } </h3>
				<h3>Species: {this.props.species } </h3>
				<h3>Habitat: {this.props.habitat } </h3>
				<h3>Diet: {this.props.diet } </h3>
				<button className="btn btn-success" onClick={ this.props.getId.bind(null, "editOneAnimal", this.props.id)} > Edit </button>
				<button className="btn btn-danger" onClick={ this.props.deleteAnimalFromServer.bind(null, this.props.id)}> DELETE </button>
				</div>
			</div>
				)


		}

}); 

module.exports= AnimalCard;