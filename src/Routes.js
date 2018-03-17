import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import TableList from './TableList';
import TableView from './TableView';
import About from './About';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TableList} />
        <Route path="/about" component={About} />
        <Route
          path="/tables/:name"
          render={props => <TableView {...props} />}
        />
      </Switch>
    );
  }
}

export default Routes;
