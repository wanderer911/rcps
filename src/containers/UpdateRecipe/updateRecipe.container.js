import React from 'react';

export const UpdateRecipe = props=> {
  const {handleSubmit,handleChange,title,description,submitted} = props;
  return (
  <div className="col-sm-12 col-md-8 col-lg-6">
    <h2>Edit recipe</h2>
    <form name="form" onSubmit={handleSubmit}>
      <div className={'form-group' + (submitted && !title ? ' has-error' : '')}>
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" name="title" value={title} onChange={handleChange} />
        {submitted && !title &&
            <div className="help-block">Title is required</div>
        }
      </div>
      <div className={'form-group' + (submitted && !description ? ' has-error' : '')}>
        <label htmlFor="description">Description</label>
        <textarea type="text" className="form-control" name="description" style={{height:'200px'}} value={description} onChange={handleChange} />
        {submitted && !description &&
            <div className="help-block">Description is required</div>
        }
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Ok</button>
      </div>
    </form>
  </div>
  )
}