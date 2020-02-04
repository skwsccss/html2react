import React, { Component } from 'react'
import './App.css';
import MainPage from './components/main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoomPage from './components/roomPage';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/roompage" exact component={RoomPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}
