// real service
import axios from 'axios';

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
  let data;
  try {
    response = await axios({
      method:"GET",
      url:'/api/v1/rcp',
      headers: new Headers({
        'Content-Type': 'application/json'})
    }); 
    console.log(response);
    data = response.data;
  }catch(e){
    console.log(e);
    error = e;
  }
  return new Promise((resolve,reject)=>{
    error?reject(error):resolve(data);
  })

}

async function createRecipe(title,description){
  let response;
  let error;
  let data;
  try{
    response = await axios({
      method:'POST',
      url:'/api/v1/rcp',
      data:{title,description},
      headers: new Headers({
        'Content-Type': 'application/json'})
    }); 
    data = response.data;
  } catch(e){
    console.log(e);
    error=e;
  }
  return new Promise((resolve,reject)=>error?reject(error):resolve(data));

}

async function getRecipeById(id){
  let response;
  let error;
  let data;
  try {
    response = await axios({
      method:'GET',
      url:'/api/v1/rcp/'+id,
      headers: new Headers({
        'Content-Type': 'application/json'})
    }); 
    data = response.data;
  } catch(e){
    console.log(e.response.data.error);
    error=e;

  }
  return new Promise((resolve,reject)=>error?reject(error):resolve(data));
}

async function updateRecipe(title,description,id){
  let response;
  let error;
  let data;
  try {
    response = await axios({
      method:'PUT',
      url:'/api/v1/rcp/'+id,
      data:{title,description},
      headers: new Headers({
        'Content-Type': 'application/json'})
    }); 

    data = response.data;
  } catch(e){
    console.log(e);
    error=e;
  }
  return new Promise((resolve,reject)=>error?reject(error):resolve(data));
  
}

async function deleteRecipe(id){
  let response;
  let error;
  let data;
  try {
    //response = await myFetch('/api/v1/rcp/'+id,'DELETE');
    response = await axios({
      method:'DELETE',
      url:'/api/v1/rcp/'+id,
      headers: new Headers({
        'Content-Type': 'application/json'})
    }); 
    data = response.data;
  } catch(e){
    console.log(e);
    error=e;
  }
  return new Promise((resolve,reject)=>error?reject(error):resolve(data));
  
}