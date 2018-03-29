import React from 'react'; // do i need it?
import {RecipesVersions} from '../';

// TODO ADD MORE VISUAL STUFF
export const RecipeDetailsComponent = props=> {
  const {item} = props;
  return (
    <div className="col-sm-12 col-md-8 col-lg-6 details-menu">
      <p>{item.title }</p>
      <p>{item.description }</p>
      <p>{item.created }</p>
      <p>{item.updated }</p>
      <div>
        {item.versions.length?<p>Previous versions</p>:<p>No previous versions</p>}
        {item.versions.map((item) =>
        <RecipesVersions item={item} key={item.updated}/>)}
      </div>
  </div>
  )
}