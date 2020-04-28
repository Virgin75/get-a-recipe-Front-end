import React from 'react';
import ReactDOM from 'react-dom';
import Home from './routes/Home';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Recipe from './routes/Recipe'
import StoreProvider from './store'


ReactDOM.render(
  <StoreProvider>
  <Router>
    <>
      <Route path='/recipe' component={Recipe} />
      <Route path='/' component={Home} />
    </>
  </Router>
  </StoreProvider>,
  document.getElementById('root')
);

