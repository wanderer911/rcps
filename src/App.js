import React, { Component } from 'react';
import { Router, Route, NavLink  } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';
import { CreatePage, DetailsPage, RecipesListPage } from './containers';
//import logo from './logo.svg';
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
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
              <NavLink to="/" className="navbar-brand">Start</NavLink>
              <NavLink to="/create" className="nav-item nav-link">Create</NavLink>
            </nav>
          <div className="container">
                  <div className="container">
                      <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                          {alert.message &&
                              <div className={`alert ${alert.type}`}>{alert.message}</div>
                          }
                          
                          <Route path='/create' component={CreatePage} />
                          <Route exact path="/" component={RecipesListPage} />
                          <Route path="/recipe/:id" component={DetailsPage} />
                              
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




