import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import TableList from './TableList';
import TableView from './TableView';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={TableList} />
          <Route
            path="/tables/:name"
            render={props => <TableView {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
