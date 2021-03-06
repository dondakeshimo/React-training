import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('app')
    );

render(App);

// webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App));
