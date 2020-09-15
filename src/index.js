import React from 'react';
import { render } from 'react-dom';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';
import ErrorBoundary from 'components/errorBoundary';
import App from 'components/app/App';
import * as serviceWorker from 'serviceWorker';
import 'index.scss';

const store = configureStore();

const renderApp = () => render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/app/App', renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
