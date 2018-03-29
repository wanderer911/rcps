
//TODO SPLIT IT INTO FUNCTIONS 

export async function adApiCall(action,payload){
  let recipesList = JSON.parse(localStorage.getItem('recipesList'));
  if (!recipesList){//set initial if no userslist
    recipesList = [];
    localStorage.setItem('recipesList',JSON.stringify(recipesList));
  }
  return new Promise((resolve,reject)=>{
    if (action === 'RECIPE_GETALL'){
      resolve(recipesList);
    }
    else if (action ==='RECIPE_CREATE' && validateRecipe(payload.title,payload.description)){
      let time = Date.now();
      let newRecipe = {
        title:payload.title,
        description:payload.description,
        created: time,
        updated: time,
        versions:[],
        id:Math.random().toString(36).substr(2, 9)};//random
      if (newRecipe){
        recipesList.push(newRecipe);
        localStorage.setItem('recipesList',JSON.stringify(recipesList));
        resolve(newRecipe);
      }else{
        reject('something went wrong, during the creation of new recipe');
      }
    }
    else if (action === 'RECIPE_GETBYID'){
      let recipe = recipesList.find(el=>el.id===payload.id);
      recipe?resolve(recipe):reject('wrong recipe id');
    }
    else if(action === 'RECIPE_UPDATE'  && validateRecipe(payload.title,payload.description)){
      let updatedRecipe;
      let filtered = recipesList.map(recipe=>{
        if (recipe.id===payload.id){
          updatedRecipe = {
            ...recipe,
            versions:[...recipe.versions,
              {
                title: recipe.title,
                description: recipe.description,
                updated: recipe.updated
              }],
            title:payload.title,
            description:payload.description,
            updated: Date.now()
          };
          return updatedRecipe;
        } else { return recipe}
      });
      if (updatedRecipe){
        localStorage.setItem('recipesList',JSON.stringify(filtered));
        resolve(updatedRecipe)
      } else{ reject('wrong id'); }
    }
    else if (action === 'RECIPE_DELETE' ){
      let filtered = recipesList.filter(recipe=>recipe.id !== payload.id);
      if (recipesList.length > filtered.length){
        localStorage.setItem('recipesList',JSON.stringify(filtered));
        resolve('deleted id: '+ payload.id);
      } else { reject('wrong id.Unable to delete');}
    }
    else {
      console.log(action,payload);
      reject("oops. u can't do that");
    }
  });
}

function validateRecipe(title,description,){
  console.log(title.length && description.length);
  return title.length > 0 && description.length > 0;
}