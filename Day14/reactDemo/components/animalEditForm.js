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

var AnimalEditForm = React.createClass({
	render : function () {
		return (
			<div>
				<div className ="container">
			 	<form className="form-inline" onSubmit={this.props.handleEditAnimalSubmit}>
			 		<div className="form-group">
			 			<label>Name</label>

			 			<input type="text" className="form-control" placeholder="Name" 
			 			onChange={this.props.onNameChange} value={this.props.name}/>

			       </div>

			       <div className="form-group">
			 			<label>Species</label>

			 			<input type="text" className="form-control" placeholder="Species" 
			 			onChange= {this.props.onSpeciesChange} value = {this.props.species} />
			       </div>

			<div className="form-group">
			 			<label>Habitat</label>
			 			<input type="text" className="form-control" placeholder="Habitat" 
			 			onChange={this.props.onHabitatChange} value={this.props.habitat}/>
			       </div>

			<div className="form-group">
			 			<label>Diet</label>
			 			<input type="text" className="form-control" placeholder="Diet" 
			 			onChange={this.props.onDietChange} value={this.props.diet} />

			       </div>
			<button type = "submit" className= "btn btn-success">Update</button>
			</form>
		</div>
      </div>
			)
	}
});

module.exports = AnimalEditForm;