import React from 'react';
import { Link } from 'react-router-dom';

export const RecipeListComponent = props=> {
	const {items} = props;
	let element;
	if(items.recipesList  && items.recipesList.length){
		if(window.innerWidth>768){       // table for large screen. list for small
			element =  <div className="table-responsive-sm"><table className="table">
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">Title</th>
						<th scope="col">Details</th>
					</tr>
				</thead>
				<tbody>
					{ items.recipesList.map((item) =>
						<tr key={item._id }>
							<td>{item.updated}</td>
							<td>{item.title}</td>
							<td><Link to={'/recipe/'+item._id} ><button type="button" className="btn btn-primary">Details</button></Link></td>
						</tr>
					)}
				</tbody>
			</table></div>; 
		} else {
			element = <div>
				{ items.recipesList.map((item) =>
					<Link to={'/recipe/'+item._id} key={item._id }>
						<div className="list-group-item list-group-item-primary row version"  >
							<div className="offset-sm-1"><i>{item.updated}</i></div>
							<div className="offset-sm-1">{item.title}</div>
						</div>
					</Link>
				)}
			</div>;
		}

	} else {
		element =  <p>No recipes added yet</p>;
	}

	return (
		<div>
			{element}
		</div>
	);
};

