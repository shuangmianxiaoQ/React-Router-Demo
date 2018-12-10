import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AuthorizedRoute from './AuthorizedRoute';
import store from './store';

// Layouts
import UnauthorizedLayout from './layouts/UnauthorizedLayout';
import PrimaryLayout from './layouts/PrimaryLayout';

import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/auth" component={UnauthorizedLayout} />
            <AuthorizedRoute path="/app" component={PrimaryLayout} />
            <Redirect to="/auth" />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
