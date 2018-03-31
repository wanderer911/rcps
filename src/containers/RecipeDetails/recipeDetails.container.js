import React from 'react';
import { connect } from 'react-redux';
import { recipeActions } from '../../actions';
import { RecipeDetailsComponent } from '../../components';
import { UpdateRecipe } from '../';
import { time } from '../../helpers';
class DetailsPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			description: '',
			submitted: false,
			edit:false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(recipeActions.getRecipeById(this.props.match.params.id));
	}

	handleChange(e){
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e){
		e.preventDefault();
		this.setState({ submitted: true });
		const { title, description } = this.state;
		const { dispatch } = this.props;
		const { id } = this.props.match.params;
		if (title && description) {
			dispatch(recipeActions.updateRecipe(title, description,id));
		}
	}

	handleEdit(e){
		this.setState({ 
			edit: !this.state.edit,
			title: this.props.recipes.selectedRecipe.title,
			description: this.props.recipes.selectedRecipe.description });
	}

	handleDelete(e){
		const { dispatch } = this.props;
		const { id } = this.props.match.params;
		dispatch(recipeActions.deleteRecipe(id));
	}

	render (){
		const { title, description, submitted,edit } = this.state;
		const { recipes } = this.props;
		let editBtn = null;
		if(!edit){
			editBtn = <button type="button" className="btn btn-warning" onClick={this.handleEdit}>Edit</button>;
		} else {
			editBtn = <button type="button" className="btn btn-warning" onClick={this.handleEdit}>Back</button>;
		}
		return (
			<div className="row ">
				{recipes.loading && <em>Loading recipe...</em>}
				{!recipes.loading && recipes.selectedRecipe &&
          <div className="col-md-3 order-last details-menu">
          	<p>
          		{editBtn}
          		<button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
          	</p>
          	<p>Created {time(recipes.selectedRecipe.created) }</p>
          	<p>Last update {time(recipes.selectedRecipe.updated) }</p>
          </div>
				}
				{!edit && recipes.selectedRecipe && 
          <RecipeDetailsComponent item={recipes.selectedRecipe}/>}
          
				{ edit && !recipes.loading &&  
        <UpdateRecipe handleSubmit={this.handleSubmit} handleChange={this.handleChange} title={title} description={description} submitted={submitted}/>}

       
			</div>
		);
	}

}

function mapStateToProps(state) {
	const { recipes } = state;
	return {
		recipes
	};
}

const connectedDetailsPage= connect(mapStateToProps)(DetailsPage);
export { connectedDetailsPage as DetailsPage };