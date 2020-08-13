import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import logo from './logo.svg';
import reactlogo from './reactlogo.png'
import { GameStartForm } from './features/game/GameStartForm'
import './App.css';
import { GamePage } from './features/game/GamePage';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/" 
         render={() => (
           <React.Fragment>
             <img src={reactlogo} className="App-logo" alt="logo" />
             <img src={logo} className="App-logo" alt="logo" />

        <div className="title">
          Quiz Application Training React+Redux.
        </div>
        <GameStartForm/>
        </React.Fragment>
         )}/>

         <Route exact path="/quiz/" component={GamePage}/>
         <Redirect to="/" />
        </Switch>
    </div>
    </Router>

  );
}

export default App;
