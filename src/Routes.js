import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Connect from './Connect';
import TableList from './TableList';
import TableView from './TableView';
import About from './About';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Connect} />
        <Route exact path="/tables" component={TableList} />
        <Route
          path="/tables/:name"
          render={props => <TableView {...props} />}
        />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default Routes;
