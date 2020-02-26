import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Todo from '../todo/todo';
import About from '../about/about';

export default props => (
  <Router>
    <div>
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <i className="fa fa-calendar-check-o"></i> TodoApp
            </Link>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/todos">
          <Todo />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Todo />
        </Route>
      </Switch>
    </div>
  </Router>
);
