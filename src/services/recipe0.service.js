import {adApiCall as api} from '../fake-backend';
//TEMP. real one will be with real api calls
// dont need the jwt
//const jwt = JSON.parse(localStorage.getItem('JWT'));

export const recipeService = {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,

};

async function getAllRecipes(){
  let response;
  let error;
  try {
    response = await api('RECIPE_GETALL')
  }catch(e){
    error = e;
  }
  return new Promise((resolve,reject)=>{
    error?reject(error):resolve(response);
  })

}

async function createRecipe(title,description){
  let response;
  let error;
  
  try{
    response = await api('RECIPE_CREATE',{title,description});
  } catch(e){
    error=e;
  }
  return new Promise((resolve,reject)=>error?reject(error):resolve(response));

}

async function getRecipeById(id){
  let response;
  let error;
  try {
    response = await api('RECIPE_GETBYID',{id});
  } catch(e){
    error=e;
  }
  return new Promise((resolve,reject)=>error?reject(error):resolve(response));
}

async function updateRecipe(title,description,id){
  let response;
  let error;

  try {
    response = await api('RECIPE_UPDATE',{title,description,id});
  } catch(e){
    error=e;
  }
  return new Promise((resolve,reject)=>error?reject(error):resolve(response));
  
}

async function deleteRecipe(id){
  let response;
  let error;
  try {
    response = await api('RECIPE_DELETE',{id});
  } catch(e){
    error=e;
  }
  return new Promise((resolve,reject)=>error?reject(error):resolve(response));
  
}