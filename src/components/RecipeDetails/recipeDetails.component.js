import React from 'react';
import { RecipesVersions } from '../';

// TODO ADD MORE VISUAL STUFF
export const RecipeDetailsComponent = props=> {
	const {item} = props;
	return (
		<div className="col-sm-12 col-md-8 col-lg-6 details-menu">
			<h3><b><i>{item.title }</i></b></h3>
			<p>{item.description }</p>
			<br>
			<div>
				{item.versions.length?<p>Previous versions</p>:<p>No previous versions</p>}
				{item.versions.map((item) =>
					<RecipesVersions item={item} key={item.updated}/>)}
			</div>
		</div>
	);
};