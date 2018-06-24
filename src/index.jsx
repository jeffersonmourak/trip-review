import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import reducers from '@reducers';
import Login from '@containers/Login.jsx';
import NewTrip from '@containers/NewTrip.jsx';
import Trip from '@containers/Trip.jsx';
import Dashboard from '@components/Dashboard.jsx';


let history = createBrowserHistory();
const store = createStore(reducers);

const Application = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path={`/login`} component={Login}/>
        <Route exact path={`/trip/new`} component={NewTrip}/>
        <Route exact path={`/trip/:id`} component={Trip}/>
        <Route exact path={`/`} component={Dashboard}/>
      </Switch>
    </Router>
  </Provider>
)

render(<Application/>, document.getElementById(`app`));