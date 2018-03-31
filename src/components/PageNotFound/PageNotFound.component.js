import React from 'react';

export const PageNotFound = ({ location }) => (
	<div>
		<h3>
			<p>You tried to reach<code>{location.pathname}</code> </p>
			<p>Page not found</p>
		</h3>
	</div>
);