import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import HomeScreen from './screens/HomeScreen';
import NavigationScreen from './screens/NavigationScreen';
import ProductScreen from './screens/ProductScreen';
import WatchListScreen from './screens/WatchListScreen';


function App() {
  return (
    <Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Book Store</a>
        </div>
        <div>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="d-flex h-100">
          <NavigationScreen></NavigationScreen>
          <div className="main-menu">
            <Switch >
              <Route path="/watchlist/:id?" component={ WatchListScreen }></Route>
              <Route path="/product/:id" component={ ProductScreen }></Route>
              <Route path="/" component={ HomeScreen } exact ></Route>
            </Switch>
          </div>
          
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
    </Router>
  );
}

export default App;
