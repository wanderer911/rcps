import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { recipes } from './recipe.reducer';

const rootReducer = combineReducers({
  alert,
  recipes
});

export default rootReducer;