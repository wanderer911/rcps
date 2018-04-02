import { recipes as reducer } from './recipe.reducer';
import { recipeConstants } from '../constants';


describe('recipe reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({});
	});
 
	it('should handle CREATE_REQUEST', () => {
		expect(
			reducer({},{
        type:recipeConstants.CREATE_REQUEST
      })
		).toEqual(
      {
        loading:true
      }
		);
  });
  it('should handle GETBYID_REQUEST', () => {
		expect(
			reducer({},{
        type:recipeConstants.GETBYID_REQUEST
      })
		).toEqual(
      {
        loading:true
      }
		);
  });

  it('should handle DELETE_REQUEST', () => {
		expect(
			reducer({},{
        type:recipeConstants.DELETE_REQUEST
      })
		).toEqual(
      {
        loading:true
      }
		);
  });
  
  it('should handle UPDATE_REQUEST', () => {
		expect(
			reducer({},{
        type:recipeConstants.UPDATE_REQUEST
      })
		).toEqual(
      {
        loading:true
      }
		);
  });

  it('should handle GETALL_REQUEST', () => {
		expect(
			reducer({},{
        type:recipeConstants.GETALL_REQUEST
      })
		).toEqual(
      {
        loading:true
      }
		);
  });

  
	it('should handle CREATE_FAILURE', () => {
		const error = 'hello world';
		expect(
			reducer({},{
				type:recipeConstants.CREATE_FAILURE,
				error:error
			})
		).toEqual(
      {
        error:error,
      }
		);
  });

  it('should handle GETBYID_FAILURE', () => {
		const error = 'hello world';
		expect(
			reducer({},{
				type:recipeConstants.GETBYID_FAILURE,
				error:error
			})
		).toEqual(
      {
        error:error,
      }
		);
  });

  it('should handle DELETE_FAILURE', () => {
		const error = 'hello world';
		expect(
			reducer({},{
				type:recipeConstants.DELETE_FAILURE,
				error:error
			})
		).toEqual(
      {
        error:error,
      }
		);
  });

  it('should handle UPDATE_FAILURE', () => {
		const error = 'hello world';
		expect(
			reducer({},{
				type:recipeConstants.UPDATE_FAILURE,
				error:error
			})
		).toEqual(
      {
        error:error,
      }
		);
  });

  it('should handle GETALL_FAILURE', () => {
		const error = 'hello world';
		expect(
			reducer({},{
				type:recipeConstants.GETALL_FAILURE,
				error:error
			})
		).toEqual(
      {
        error:error,
      }
		);
  });
// start
  it('should handle CREATE_SUCCESS', () => {
		const recipe = {title:'hello world',description:'test123'};
		expect(
			reducer({},{
				type:recipeConstants.CREATE_SUCCESS,
				recipe:recipe
			})
		).toEqual(
      {
        recipe:recipe,
      }
		);
  });

  it('should handle GETBYID_SUCCESS', () => {
		const recipe = {title:'hello world',description:'test123'};
		expect(
			reducer({},{
				type:recipeConstants.GETBYID_SUCCESS,
				recipe:recipe
			})
		).toEqual(
      {
        selectedRecipe:recipe,
      }
		);
  });

  it('should handle DELETE_SUCCESS', () => {
		const message = 'hello world';
		expect(
			reducer({},{
				type:recipeConstants.GETBYID_SUCCESS,
				message:message
			})
		).toEqual(
      {
        message:message,
      }
		);
  });

  it('should handle UPDATE_SUCCESS', () => {
		const recipe = {title:'hello world',description:'test123'};
		expect(
			reducer({},{
				type:recipeConstants.UPDATE_SUCCESS,
				recipe:recipe
			})
		).toEqual(
      {
        selectedRecipe:recipe,
      }
		);
  });

  it('should handle GETALL_SUCCESS', () => {
    const recipes = [
      {title:'hello world',description:'test123'},
      {title:'hello world1',description:'test1234'}
    ];
		expect(
			reducer({},{
				type:recipeConstants.UPDATE_SUCCESS,
				recipe:recipe
			})
		).toEqual(
      {
        recipesList:recipes,
      }
		);
  });
});