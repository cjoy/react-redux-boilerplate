import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App/';

render(
	<Provider store={store}>
		<AppContainer>
			<App />
		</AppContainer>
	</Provider>,
	document.getElementById('root'),
);

if (module.hot) {
	module.hot.accept();
}
