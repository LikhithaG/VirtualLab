import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {Home} from './Components/Home';
// import {Page1} from './Components/Page1';
// import {Page2} from './Components/Page2';
import { Navigation } from './Components/Navigation';
import Cards from './Components/cardsUI';

import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">

        <Navigation/>

        {/* <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/page1' component={Page1} exact />
          <Route path='/page2' component={Page2} exact />
        </Switch> */}
        <Cards/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;