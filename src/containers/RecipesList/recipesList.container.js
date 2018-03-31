import React from 'react';
import { connect } from 'react-redux';
import { recipeActions } from '../../actions';
import { RecipeListComponent } from '../../components';

class RecipesListPage extends React.Component {
	componentDidMount() {
		this.props.dispatch(recipeActions.getAllRecipes());
	}

	render(){
		const { recipes } = this.props;
		return (
			<div>
				{recipes.loading ? <em>Loading Recipes ...</em>: <RecipeListComponent items={recipes}/>}
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


const connectedRecipesPage = connect(mapStateToProps)(RecipesListPage);
export { connectedRecipesPage as RecipesListPage };