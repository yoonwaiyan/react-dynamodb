import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContainer from './AppContainer';
import Routes from './Routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <Router>
    <AppContainer>
      <Routes />
    </AppContainer>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
