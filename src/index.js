import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter  as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import EdutyService from './services/eduty-service';
import { EdutyServiceProvider } from './components/eduty-service-context';

import store from './store';

const edutyService = new EdutyService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <EdutyServiceProvider value={edutyService}>
        <Router>
          <App />
        </Router>
      </EdutyServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')  
);