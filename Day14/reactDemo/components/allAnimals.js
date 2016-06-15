//AnimalApp (grandpappy)
  //AllAnimalData 
  		   //AllAnimals
  				  //animalCard
  //AnimalPostData
  		  //animalPostForm 
  //Toggler

var React = require('react');
var AnimalCard = require('./animalCard.js');


function AllAnimals(props){
	var animals = props.animals.map(function(item){
		return <AnimalCard 	name = {item.name}
								species= {item.species}
								habitat = {item.habitat} 
								diet = {item.diet} 
								key = {item._id } 
								id = {item._id} 
								deleteAnimalFromServer = {props.deleteAnimalFromServer} 
								getId= {props.getId} />

	});

	return (
		<div>
			{animals}
		</div>
		)
};


module.exports = AllAnimals;