import { recipeConstants } from '../constants';
import { alertActions } from './';
import { history } from '../helpers';
import { recipeService } from '../services';

export const recipeActions = {
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipeById
};

function createRecipe(title,description){
  return async dispatch=>{
    dispatch(request());
    try {
      console.log(title,description);
      let recipe = await recipeService.createRecipe(title,description);
      dispatch(success(recipe));
      //temp
      //history.push('/'); 
      history.push('/recipe/' + recipe.id); 
    } catch (error){
      dispatch(failure(error));
      dispatch(alertActions.error(error));
    }

  }
  function request() { return { type: recipeConstants.CREATE_REQUEST } }
  function success(recipe) { return { type: recipeConstants.CREATE_SUCCESS,recipe } }
  function failure(error) { return { type: recipeConstants.CREATE_FAILURE, error } }

}

function updateRecipe(title,description,id){
  return async dispatch=>{
    dispatch(request());
    try {
      let recipe = await recipeService.updateRecipe(title,description,id);
      dispatch(success(recipe));
      history.push('/');
    } catch (error){
      dispatch(failure(error));
      dispatch(alertActions.error(error));
    }
  }
  function request() { return { type: recipeConstants.UPDATE_REQUEST } }
  function success(recipe) { return { type: recipeConstants.UPDATE_SUCCESS, recipe } }
  function failure(error) { return { type: recipeConstants.UPDATE_FAILURE, error } }
}

function deleteRecipe(id){
  return async dispatch=>{
    dispatch(request());
    try {
      let res = await recipeService.deleteRecipe(id); //text deleted id: 
      dispatch(success(res));//remove from state
      history.push('/');
    } catch(error){
      dispatch(failure(error));
      dispatch(alertActions.error(error));
    }

  }
  function request() { return { type: recipeConstants.DELETE_REQUEST } }
  function success(message) { return { type: recipeConstants.DELETE_SUCCESS,message } }
  function failure(error) { return { type: recipeConstants.DELETE_FAILURE, error } }
}

function getAllRecipes(){
  return async dispatch=>{
    dispatch(request());
    try {
      let recipes = await recipeService.getAllRecipes();
      dispatch(success(recipes));

    } catch(error){
      dispatch(failure(error));
      dispatch(alertActions.error(error));
    }
  }
  function request() { return { type: recipeConstants.GETALL_REQUEST } }
  function success(recipes) { return { type: recipeConstants.GETALL_SUCCESS, recipes } }
  function failure(error) { return { type: recipeConstants.GETALL_FAILURE, error } }
}

function getRecipeById(id){
  return async dispatch=>{
    dispatch(request());
    try {
      let recipe = await recipeService.getRecipeById(id);
      dispatch(success(recipe));

    } catch(error){
      dispatch(failure(error));
      dispatch(alertActions.error(error));
    }
  }
  function request() { return { type: recipeConstants.GETBYID_REQUEST } }
  function success(recipe) { return { type: recipeConstants.GETBYID_SUCCESS,recipe } }
  function failure(error) { return { type: recipeConstants.GETBYID_FAILURE, error } }
}