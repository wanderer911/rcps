import React, { Component } from 'react';
import { Router, Route, NavLink, Switch  } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';
import { CreatePage, DetailsPage, RecipesListPage } from './containers';
import { PageNotFound } from './components';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		const { dispatch } = this.props;
		history.listen((location, action) => {
			// clear alert on location change
			dispatch(alertActions.clear());
		});
	}
	render() {
		const { alert } = this.props;
		return (
			<div className="main">
				<Router history={history}>
					<div className="router">
						<nav className="navbar navbar-expand-md navbar-dark mb-4 my-nav">
							<NavLink to="/" className="navbar-brand my-navlink">Start</NavLink>
							<NavLink to="/create" className="navbar-brand my-navlink">Create</NavLink>
						</nav>
						<div className="container">
							<div className="container">
								<div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
									{alert.message &&
										<div className={`alert ${alert.type}`}>
											<p>{alert.message.response.data.error}</p>
										</div>
									}
									<Switch>
										<Route path='/create' component={CreatePage} />
										<Route exact path="/" component={RecipesListPage} />
										<Route path="/recipe/:id" component={DetailsPage} />
										<Route component={PageNotFound} />
									</Switch>
								</div>
							</div>
						</div>
					</div>
				</Router>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { alert } = state;
	return {
		alert
	};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };