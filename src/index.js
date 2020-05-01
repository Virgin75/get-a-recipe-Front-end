import React from 'react';
import ReactDOM from 'react-dom';
import Home from './routes/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Recipe from './routes/Recipe'
import StoreProvider from './store'


ReactDOM.render(
  <StoreProvider>

    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipe' component={Recipe} />
      </Switch>
    </Router>
  
  </StoreProvider>,
  document.getElementById('root')
);

