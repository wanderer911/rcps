import { recipeConstants } from '../constants';

export function recipes(state={},action){
	switch(action.type){
	//CREATE 
	case recipeConstants.CREATE_REQUEST:
		return {
			loading:true
		};
	case recipeConstants.CREATE_SUCCESS:
		return {
			recipe:action.recipe,
		};
	case recipeConstants.CREATE_FAILURE:
		return {
			error:action.error,
		};
		//GET BY ID
	case recipeConstants.GETBYID_REQUEST:
		return {
			loading:true
		};
	case recipeConstants.GETBYID_SUCCESS:
		return {
			selectedRecipe:action.recipe,
		};
	case recipeConstants.GETBYID_FAILURE:
		return {
			error:action.error,
		};
		//delete
	case recipeConstants.DELETE_REQUEST:
		return {
			loading:true
		};
	case recipeConstants.DELETE_SUCCESS:
		return {
			message:action.message
		};
	case recipeConstants.DELETE_FAILURE:
		return {
			error:action.error
		};
		//update
	case recipeConstants.UPDATE_REQUEST:
		return {
			loading:true
		};
	case recipeConstants.UPDATE_SUCCESS:
		return {
			selectedRecipe:action.recipe,
		};
	case recipeConstants.UPDATE_FAILURE:
		return {
			error:action.error
		};
		//getall
	case recipeConstants.GETALL_REQUEST:
		return {
			loading:true
		};
	case recipeConstants.GETALL_SUCCESS:
		return {
			recipesList:action.recipes
		};
	case recipeConstants.GETALL_FAILURE:
		return {
			error:action.error
		};
	default:
		return state;
	}
}

