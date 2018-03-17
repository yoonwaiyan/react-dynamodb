import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import AppContainer from './AppContainer';
import Routes from './Routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
	<AppContainer>
		<Routes />
	</AppContainer>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
