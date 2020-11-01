import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {Home} from './Components/Home';
// import {Page1} from './Components/Page1';
// import {Page2} from './Components/Page2';
import { Navigation } from './Components/Navigation';
import Intro from './Components/Introduction';
import Cards from './Components/cardsUI';
import "./Components/card-style.css";

import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="universal">
        <Navigation/>
        <Switch>
          <Route path='/' component={Intro} exact />
          <Route path='/Theory' component={Cards} exact />
          {/* <Route path='/page2' component={Page2} exact /> */}
          </Switch>
          </div>
        {/* <Cards/> */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;